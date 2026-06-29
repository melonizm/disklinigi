import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://disci:MlhKrtgz2552@cluster0.hyuoaiz.mongodb.net/";

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB cluster.");
        const adminDb = client.db('admin');
        const dbs = await adminDb.admin().listDatabases();
        console.log("Databases on this cluster:");
        for (const db of dbs.databases) {
            console.log(` - ${db.name}`);
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
