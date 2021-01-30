import { addSubject, listSubjects, removeSubject } from "../use-case/edit-subjects";


async function postSubjectToGroup(request) {
    const groupId = request.params.Id;
    const subject = request.body.subject;
    return addSubject(groupId, subject);
}

async function getSubjectsOfGroup(request){
    const groupId = request.params.Id;
    return listSubjects(groupId);
}


async function deleteSubject(request) {
    const groupId = request.params.Id;
    const subject = request.body.subject;
    return removeSubject(groupId, subject);
}


export{
    postSubjectToGroup,
    getSubjectsOfGroup,
    deleteSubject
}