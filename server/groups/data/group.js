export default function buildMakeGroup(){
    return function makeGroup({
        owner,
        name,
        members,
        subjects,
        full=false,
    } = {}) {


        if(!owner){
            throw new Error('Group must have an owner');
        }
        
        //name is not optional
        if(name && name.length < 2){
            throw new Error('Group name must be 2 or more charachters long');
        }

        if(!subjects || subjects.length < 1){
            throw new Error('Groub should have at lease one subject');
        }
       
        members=[];
        members.push(owner);



        return Object.freeze({
            getOwner: ()=>owner,
            getName:()=>name,
            getMembers:()=>members,
            getSubjects:()=>subjects,
            getFull:()=>full
        });
    }
}   
