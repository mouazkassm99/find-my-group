import makeGroup from "../data";

export default function makeAddGroup({dbManager}){
    return async function addGroup(groupInformation){

        let group = null;
        try{
            group = makeGroup(groupInformation)
        }catch(err){
            console.log("error:");
            console.log(err.message);
        }
        console.table(group);
        if(group){
            return dbManager.insert({
                owner: group.getOwner(),
                members: group.getMembers(),
                subjects: group.getSubjects(),
                name: group.getName(),
                full: group.getFull() 
            });
        }
    }
}