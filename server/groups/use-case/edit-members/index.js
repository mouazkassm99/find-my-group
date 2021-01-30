import makeAddMember from "./add-member";
import makeDBManager from '../../data-manager'
import makeListGroupMembers from "./list-members";
import makeRemoveMember from "./remove-member";


const dbManager = makeDBManager();

const addMember = makeAddMember({dbManager});
const listGroupMembers = makeListGroupMembers({dbManager});
const removeMember = makeRemoveMember({dbManager});

export{
    addMember,
    listGroupMembers,
    removeMember,
}



