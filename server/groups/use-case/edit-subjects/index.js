import makeAddSubject from "./add-subject";
import makeDBManager from '../../data-manager'
import makeListSubjectsOfGroup from "./list-subjects";
import makeRemoveSubject from "./remove-subject";

const dbManager = makeDBManager(); 
const addSubject = makeAddSubject({dbManager});
const listSubjects = makeListSubjectsOfGroup({dbManager});
const removeSubject = makeRemoveSubject({dbManager});


export{
    addSubject,
    listSubjects,
    removeSubject,
}