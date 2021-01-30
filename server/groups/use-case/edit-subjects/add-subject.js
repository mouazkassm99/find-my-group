export default function makeAddSubject({dbManager}){
    return async function addSubject(groupId, subject){
        let group = await dbManager.findById(groupId);
        if(!group){
            throw new Error('group was not found');
        }

        //check if subject already exists
        if(group.subjects.includes(subject, 0)){
            throw new Error('subject already exists in the group');
        }


        group.subjects.push(subject);
        
        return await group.save();
    }
}