export default function buildMakeGroup({IdMaker}) {
    return function makeGroup({
        id = IdMaker.makeId(),
        owner,
        name,
        members,
        subjects,
        createdOn = Date.now(),
        full,
    } = {}) {


        if(!IdMaker.isValidId(id)){
            throw new Error('Group must have a valid id');
        }

        if(!owner){
            throw new Error('Group must have an owner');
        }
        
        if(!name || name.length < 2){
            throw new Error('Group name must be 2 or more charachters long');
        }

        //owner must exist

        if(!members || members.length < 1){
            throw new Error('Group must have at lease one member');
        }

        if(subjects && subjects.length < 1){
            throw new Error('Group must have at lease one subject');
        }


        return Object.freeze({
            getOwner: ()=>owner,
            getName:()=>name,
            getCreatedOn:()=>createdOn,
            getId:()=>id,
            getMembers:()=>members,
            getSubjects:()=>subjects,
            getFull:()=>full
        });
    }
}   
