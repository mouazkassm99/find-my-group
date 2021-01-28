export default function makeLookForGroup({dbManager}){
    return async function lookForGroup(id){
        return dbManager.findById(id);
    }
}