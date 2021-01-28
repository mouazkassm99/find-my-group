import { addGroup, listGroups, removeAllGroups } from "../use-case";


async function getAllGroups(request){
    const full = request.body.full;
    return listGroups({full: full ? full : false});
}

async function postAllGroups(request){
    return addGroup(request.body);
}

async function deleteAllGroups(request){
    return removeAllGroups();
}



export{
    getAllGroups,
    postAllGroups,
    deleteAllGroups
}