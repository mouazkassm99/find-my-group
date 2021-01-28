import { async } from 'regenerator-runtime';
import { makeDb } from './data-access';
import makeGroupsDb from './data-access/groups-db';
import makeGroup from './data/index';
import Id from './Id';
import makeAddGroup from './use-case/add-group';
 
function printGroup(){
    const group = makeGroup({
        owner: "mouaz",
        members: ["mouaz"],
        name:"G1",
        subjects: ["math"],
        full:false,
    });
    console.log(group);
    console.log(group.getMembers());
}

async function printDb(){
    const db = await makeDb();
    console.log(
        db.collection('group'));
}

async function printGroupDb(){
    const db = await makeDb();
    const dbManager = makeGroupsDb({makeDb});
    console.log(dbManager);
    dbManager.findAll({fullGroup:false})
    .then((res)=>console.log(res))
    dbManager.insert()
    .then((res)=>{
        console.log(res);
    })
}

async function addGroup(){
    const dbManager = makeGroupsDb({makeDb});
    const addGroup = makeAddGroup({groupsDb:dbManager});
    const added = addGroup({
        owner: "mouaz",
        name:"g1",
        members:["mouaz"],
        subjects:["prog1"],
        full:false
    })
    console.log(added);
}


export {
    printGroup,
    printDb,
    printGroupDb,
    addGroup
}