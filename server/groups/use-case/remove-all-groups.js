export default function makeRemoveAllGroups({dbManager}){
    return function removeAllGroups(){
        dbManager.removeAll();
    }
}