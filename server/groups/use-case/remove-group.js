export default function makeRemoveGroup({dbManager}){
    return async function removeGroup(id){
        dbManager.removeById(id);
    }
}


