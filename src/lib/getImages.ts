import connectToDatabase from "./mongodb";
import Resimler from "@/models/Resimler";

export async function getImages(): Promise<Record<string, string>> {
  try {
    await connectToDatabase();
    // First try to find the active document
    let doc = await Resimler.findOne({ isActive: true }).lean();
    
    // If no active document is set, fallback to the newest one
    if (!doc) {
      doc = await Resimler.findOne().sort({ _id: -1 }).lean();
    }
    
    if (doc) {
      // Remove mongoose internal fields
      const { _id, __v, createdAt, updatedAt, _description, ...images } = doc as any;
      return images;
    }
    
    return {};
  } catch (error) {
    console.error("Failed to fetch images from MongoDB:", error);
    return {};
  }
}
