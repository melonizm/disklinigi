import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://disci:MlhKrtgz2552@cluster0.hyuoaiz.mongodb.net/resimler?retryWrites=true&w=majority";

async function checkDb() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log("Collections in 'resimler' DB:", collections.map(c => c.name));

    const collection = db.collection('resimler');
    const count = await collection.countDocuments();
    console.log("Documents in 'resimler' collection:", count);
    
    const docs = await collection.find({}).toArray();
    console.log("Docs:", JSON.stringify(docs, null, 2));

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

checkDb();
