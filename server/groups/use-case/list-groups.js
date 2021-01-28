export default function makeListGroups({dbManager}){
    return function listGroups({full=false}={}){
        return dbManager.findAll({full:full});
    }
}