import { addMember, listGroupMembers, removeMember } from "../use-case/edit-members";

async function postMember(request) {
    const groupId = request.params.Id;
    const user = request.body.user;
    console.log("in post member ---------------");
    // return addMember(user, groupId);
    return addMember(user, groupId);
    
}

async function getMembers(request) {
    const groupId = request.params.Id;
    return listGroupMembers(groupId);
}

async function deleteMember(request) {
    const groupId = request.params.Id;
    const user = request.body.user;
    return removeMember(groupId, user);
}

export {
    postMember,
    getMembers,
    deleteMember,
}