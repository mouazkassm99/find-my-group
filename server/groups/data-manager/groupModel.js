import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    owner:{
        type:String,
        required:true,
    },
    name:{
        type:String,
    },
    members:[{type:String}],
    subjects:[{type:String}],
    full:{
        type:Boolean,
        required:true,
        default:false,
    }
}, {timestamps:true});

const Group = mongoose.model('group', GroupSchema);

export default Group;

