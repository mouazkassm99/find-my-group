async function getAllGroups(request){
    console.log("gettin all queries");
    var error = new Error('test err');
    error.status = 404;
    throw error;
}

async function postAllGroups(request){
    console.log("postin all groups");
}

async function deleteAllGroups(request){
    console.log("deletin all groups");
}



export{
    getAllGroups,
    postAllGroups,
    deleteAllGroups
}