import makeDBManager from "../data-manager";
import makeAddGroup from "./add-group";
import makeRemoveGroup from './remove-group';
import makeLookForGroup from './look-for-group';
import makeEditGroup from './edit-group';
import makeListGroups from './list-groups';
import makeRemoveAllGroups from './remove-all-groups';

const dbManager = makeDBManager();

const addGroup = makeAddGroup({dbManager});
const removeGroup = makeRemoveGroup({dbManager});
const lookForGroup = makeLookForGroup({dbManager});
const editGroup = makeEditGroup({dbManager});
const listGroups = makeListGroups({dbManager});
const removeAllGroups = makeRemoveAllGroups({dbManager});

export{
    addGroup,
    removeGroup,
    lookForGroup,
    editGroup,
    removeAllGroups,
    listGroups,
}

