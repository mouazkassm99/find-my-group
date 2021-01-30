import parseHttpRequest from "../helpers/requestParser";
import { deleteAllGroups, getAllGroups, postAllGroups } from "./allGroupsConroller";
import { deleteMember, getMembers, postMember } from "./groupMembersController";
import { deleteSubject, getSubjectsOfGroup, postSubjectToGroup } from "./groupSubjectsController";
import { getGroup, deleteGroup, updateGroup } from './singleGroupController'



//all groups controller

function groupsController(req, res) {

    const parsedRequest = parseHttpRequest(req);

    console.table(parsedRequest);

    switch (parsedRequest.method) {
        case 'GET':
            getAllGroups(parsedRequest)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    res.status(err.status).json({ message: err.message, status: err.status })
                })
            break;
        case 'POST':
            postAllGroups(parsedRequest)
                .then((result) => {
                    res.status(201).json(result);
                })
                .catch(err => {
                    res.status(err.status).json({ message: err.message, status: err.status })
                })
            break;

        case 'DELETE':
            deleteAllGroups(parsedRequest)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    res.status(err.status).json({ message: err.message, status: err.status })
                })
            break;

        default:
            res.status(501).json({ message: 'operation is not supported' });
            break;
    }
}

function groupController(req, res) {
    const parsedRequest = parseHttpRequest(req);

    console.table(parsedRequest);

    switch (parsedRequest.method) {
        case 'GET':
            getGroup(req)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    res.status(err.status).json({ message: err.message, status: err.status })
                })
            break;

        case 'DELETE':
            deleteGroup(parsedRequest)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    res.status(err.status).json({ message: err.message, status: err.status })
                })
            break;

        case 'PUT':
            updateGroup(parsedRequest)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    res.status(err.status).json({ message: err.message, status: err.status })
                })
            break;

        default:
            res.status(501).json({ message: 'operation is not supported' });
            break;
    }
}


function groupMembersController(req, res) {
    const parsedRequest = parseHttpRequest(req);
    console.table(parsedRequest);
    
    switch(parsedRequest.method){
        case 'GET':
            getMembers(parsedRequest)
            .then((result)=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                res.status(404).json({ message: err.message, status: err.status })
            });
            break;
        case 'POST':
            postMember(parsedRequest)
            .then((result)=>{
                res.status(201).json(result);
            })
            .catch(err=>{
                res.status(404).json({ message: err.message, status: err.status })

            });
            break;
        case 'DELETE':
            deleteMember(parsedRequest)
            .then((result)=>{
                res.status(200).json(result);
            })
            .catch(err=>{
                res.status(404).json({ message: err.message, status: err.status })

            })
            break;
        default:
            res.status(501).json({ message: 'operation is not supported' });
            break;
    }
    
}



function groupSubjectsController(req, res) {
    const parsedRequest = parseHttpRequest(req);
    console.table(parsedRequest);
    
    switch(parsedRequest.method){
        case 'GET':
            getSubjectsOfGroup(parsedRequest)
            .then((result)=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                res.status(404).json({ message: err.message, status: err.status })
            });
            break;
        case 'POST':
            postSubjectToGroup(parsedRequest)
            .then((result)=>{
                res.status(201).json(result);
            })
            .catch(err=>{
                res.status(404).json({ message: err.message, status: err.status })

            });
            break;
        case 'DELETE':
            deleteSubject(parsedRequest)
            .then((result)=>{
                res.status(200).json(result);
            })
            .catch(err=>{
                res.status(404).json({ message: err.message, status: err.status })

            })
            break;
        default:
            res.status(501).json({ message: 'operation is not supported' });
            break;
    }
    
}


export {
    groupController,
    groupsController,
    groupMembersController,
    groupSubjectsController,
}


function makeResponse({ result, status }) {
    return Object.freeze({
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: status,
        data: JSON.stringify(result)
    })


}