export default function makeEditGroup({dbManager}){
    return async function editGroup(id, groupInformation){
        return dbManager.update(id, groupInformation);
    }
}