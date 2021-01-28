import Id from '../Id';

export default function makeGroupsDb({ makeDb }) {

    return Object.freeze({
        findAll,
        findById,
        findBySubjects,
        findByMembers,
        insert,
        remove,
        update,
    });

    async function findAll({ fullGroup = false } = {}) {
        const db = await makeDb();
        const query = fullGroup ? {} : { full:false };
        const result = await db.collection('groups').find(query);
        const found = await result.toArray();
        return found;
    }

    async function findById({ id: _id }) {
        const db = makeDb();
        const result = await db.collection('groups').find({ _id });
        const found = await result.toArray();
        if (found.length === 0) {
            return null;
        } else {
            return found[0];
        }
    }

    async function findBySubjects({ subjects }) {
        const db = makeDb();
        const result = await db.collection('groups').find({ subjects });
        const found = await result.toArray();
        return found;
    }

    async function findByMembers({ members }) {
        const db = makeDb();
        const result = await db.collection('groups').find({ members });
        const found = await result.toArray();
        return found;
    }

    async function insert({ id: _id = Id.makeId(), ...groupInfo }) {
        const db = await makeDb();
        const result = await db
            .collection('groups')
            .insertOne({ _id, ...groupInfo });
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

    async function remove({ id: _id }) {
        const db = await makeDb()
        const result = await db.collection('groups').deleteOne({ _id })
        return result.deletedCount
    }


    async function update({ id: _id, ...commentInfo }) {
        const db = await makeDb();
        const result = await db
            .collection('groups')
            .updateOne({ _id }, { $set: { ...commentInfo } })
        return result.modifiedCount > 0 ? { id: _id, ...commentInfo } : null;
    }



}