import mongoose from 'mongoose';
import { async } from 'regenerator-runtime';
import { getGroup } from '../controllers/singleGroupController';
import Group from './groupModel';


export{
    findAll,
    insert,
    removeAll,
    findById,
    update
}
// findAll,
//         findById,
//         findBySubjects,
//         findByMembers,
//         insert,
//         remove,
//         update,

async function findAll({full = false} = {}){
    await connectToDB();
    let groups = null;
    try{
        groups = await Group.find({});
    }catch(err){
        throw err;
    }
    return groups;
}

async function insert(groupInfo){
    await connectToDB();
    const group = new Group(groupInfo);

    let res = null;
    try{
       res = await group.save();
    }catch(err){
        throw err;
    }
    return res;
}

async function removeAll(){
    await connectToDB();
    Group.remove({}, (err)=>{
        if(err){
            console.table(err);
        }
    });
}

async function findById(id){
    await connectToDB();

    let group = null;
    try{
        group = await Group.findById(id);
    }catch(err){
        console.log("error:");
        console.table(err);
    }
    return group;
}

async function update(id, info){
    await connectToDB();

    let updatedGroup = null;
    try{
        updatedGroup = await Group.findByIdAndUpdate(id, {
            $set: info,
        }, {new:true});
    }catch(err){
        console.log("err");
        console.table(err);
    }
    return updatedGroup;
}






mongoose.connection.on('connected', () => { console.log("connected through mongoose"); })
mongoose.connection.on('error', (err) => { console.log(err); })

async function connectToDB() {
    if(mongoose.connection.readyState ===0){
        return mongoose.connect('mongodb://localhost/FindMyGroup', { useNewUrlParser: true, useUnifiedTopology: true });
    }
    
}

function isConnected(){
    return mongoose.connection.readyState;
}




