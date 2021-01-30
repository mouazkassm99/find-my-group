export default function makeListSubjectsOfGroup({dbManager}){
    return async function listSubjectsOfGroup(groupId){
        let group = await dbManager.findById(groupId);
        return group.subjects;
    }
}