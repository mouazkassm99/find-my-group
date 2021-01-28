import parseHttpRequest from "../helpers/requestParser";
import { deleteAllGroups, getAllGroups, postAllGroups } from "./allGroupsConroller";
import {
    getGroup,
    postGroup,
    deleteGroup,
    updateGroup
} from './singleGroupController'



function groupsController(req, res) {

    const parsedRequest = parseHttpRequest(req);

    console.table(parsedRequest);

    switch (parsedRequest.method) {
        case 'GET':
            getAllGroups(parsedRequest)
                .then((result)=>{
                    res.status(200).json(result);
                })
                .catch(err=>{
                    res.status(err.status).json({message:err.message, status:err.status})
                })
            break;
        case 'POST':
            postAllGroups(parsedRequest)
            .then((result)=>{
                res.status(201).json(result);
            })
            .catch(err=>{
                res.status(err.status).json({message:err.message, status:err.status})
            })
            break;

        case 'DELETE':
            deleteAllGroups(parsedRequest)
            .then((result)=>{
                res.status(200).json(result);
            })
            .catch(err=>{
                res.status(err.status).json({message:err.message, status:err.status})
            })
            break;

        default:

            break;
    }
}

function groupController(req, res) {
    const parsedRequest = parseHttpRequest(req);

    console.table(parsedRequest);

    switch (parsedRequest.method) {
        case 'GET':
            getGroup(req)
            .then((result)=>{
                res.status(200).json(result);
            })
            .catch(err=>{
                res.status(err.status).json({message:err.message, status:err.status})
            })
            break;
        case 'POST':
            postGroup(parsedRequest)
            .then((result)=>{
                res.status(201).json(result);
            })
            .catch(err=>{
                res.status(err.status).json({message:err.message, status:err.status})
            })
            break;

        case 'DELETE':
            deleteGroup(parsedRequest)
            .then((result)=>{
                res.status(200).json(result);
            })
            .catch(err=>{
                res.status(err.status).json({message:err.message, status:err.status})
            })
            break;

        case 'PUT':
            updateGroup(parsedRequest)
            .then((result)=>{
                res.status(200).json(result);
            })
            .catch(err=>{
                res.status(err.status).json({message:err.message, status:err.status})
            })
            break;

        default:

            break;
    }
}

export{
    groupController,
    groupsController,
}


function makeResponse({result, status}){
    return Object.freeze({
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: status,
        data: JSON.stringify(result)
    })

    
}