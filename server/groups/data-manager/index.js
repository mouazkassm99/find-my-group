import mongoose from 'mongoose';
import Group from './groupModel';


export default function makeDBManager(){
    return Object.freeze({
        findById,
        // findBySubjects,
        // findByMembers,
        findAll,
        insert,
        removeAll,
        removeById,
        update
    })
};

async function findAll({full = false} = {}){
    await connectToDB();
    let groups = null;
    try{
        groups = await Group.find({full:full});
    }catch(err){
        console.log("error:");
        console.table(err);
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
    let deleted = null;
    try{
   
        deleted = await Group.deleteMany();
    }catch(err){
        console.log("error:");
        console.table(err);
    }
    return deleted
}
async function removeById(id){
    await connectToDB();

    let group = null;
    try{
        group = await Group.findByIdAndRemove(id);
    }catch(err){
        console.log("error:");
        console.table(err);
    }
    return group;

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




