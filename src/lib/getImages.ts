import connectToDatabase from "./mongodb";
import Resimler from "@/models/Resimler";

// In-memory cache for images to avoid hitting the DB on every single render in production,
// though Next.js fetch caching is usually better, for direct DB calls a simple cache helps.
let cachedImages: Record<string, string> | null = null;
let lastFetch = 0;

export async function getImages(): Promise<Record<string, string>> {
  // Simple cache expiration of 60 seconds
  const now = Date.now();
  if (cachedImages && (now - lastFetch < 60000)) {
    return cachedImages;
  }

  try {
    await connectToDatabase();
    const doc = await Resimler.findOne().lean();
    
    if (doc) {
      // Remove mongoose internal fields
      const { _id, __v, createdAt, updatedAt, _description, ...images } = doc as any;
      cachedImages = images;
      lastFetch = now;
      return images;
    }
    
    return {};
  } catch (error) {
    console.error("Failed to fetch images from MongoDB:", error);
    return cachedImages || {}; // Fallback to cache if DB fails
  }
}
