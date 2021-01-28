import { findById, update } from "../data-manager";

async function getGroup(request){
    const id = request.params.Id;
    return findById(id)
}

async function postGroup(request){
    console.log("postin a group");
}

async function deleteGroup(request){
    console.log("deletin a group");
}

async function editGroup(request){
    const id = request.params.Id;
    const info = request.body;
    return update(id, info);
}


export{
    getGroup,
    postGroup,
    editGroup,
    deleteGroup,
}