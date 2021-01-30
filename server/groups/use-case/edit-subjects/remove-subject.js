export default function makeRemoveSubject({dbManager}){
    return async function removeSubject(groupId, subject){
        let group = await dbManager.findById(groupId);
        
        let subjects = group.subjects;

        if(!group.subjects.includes(subject, 0)){
            throw new Error('subject does not exist in the group');
        }

        if(subjects.length === 1){
            throw new Error('can not remove the single subject in the group');
        }

        for( var i = 0; i < subjects.length; i++){ 
            if ( subjects[i] === subject) { 
                subjects.splice(i, 1); 
            }
        }

        group.subjects = subjects;

        let result = null;
        try{
            result = await group.save()
        }catch(err){
            console.log("error");
            console.table(err);
        }
        return result;
    }
}