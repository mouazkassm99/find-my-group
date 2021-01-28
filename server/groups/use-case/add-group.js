import makeGroup from '../data';

export default function makeAddGroup({groupsDb}){
    return async function addGroup(groupInformation){
        const group = makeGroup(groupInformation);
        const existed = await groupsDb.findById(group.getId());
        if(existed){
            return existed;
        }

        return groupsDb.insert(group);
    }
}