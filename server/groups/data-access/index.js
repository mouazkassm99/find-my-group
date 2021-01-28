import makeGroupsDb from './groups-db'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient;
// const url = process.env.DM_COMMENTS_DB_URL;
const url = "mongodb://localhost:27017/FindMyGroup"
// const dbName = process.env.DM_COMMENTS_DB_NAME;
const dbName = "FindMyGroup";
const client = new MongoClient(url, { useNewUrlParser: true });

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const commentsDb = makeGroupsDb({ makeDb })
export default commentsDb
