
export default function makeListGroupMembers({dbManager}){
    return async function listGroupMembers(groupId) {
        const group = await dbManager.findById(groupId);
        return group.members;
    }
}