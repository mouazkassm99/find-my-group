import { findAll, insert, removeAll } from "../data-manager";

async function getAllGroups(request){
    return findAll();
}

async function postAllGroups(request){
    return insert({
        owner:"mouaz",
        full:false,

    })
}

async function deleteAllGroups(request){
    return removeAll()
}



export{
    getAllGroups,
    postAllGroups,
    deleteAllGroups
}