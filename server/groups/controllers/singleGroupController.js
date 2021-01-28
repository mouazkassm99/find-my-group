import { removeGroup, lookForGroup, editGroup } from "../use-case";

async function getGroup(request){
    const id = request.params.Id;
    return lookForGroup(id);
}

async function postGroup(request){
    // return addGroup(request.body)
}

async function deleteGroup(request){
    const id = request.params.Id;
    return removeGroup(id);
}

async function updateGroup(request){
    const id = request.params.Id;
    const info = request.body;
    return editGroup(id, info);
}


export{
    getGroup,
    postGroup,
    updateGroup,
    deleteGroup,
}