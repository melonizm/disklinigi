import mongoose, { Schema, Document } from "mongoose";

// A flexible schema that allows any string-string key-value pairs
// We use Strict: false to allow arbitrary fields
export interface IResimler extends Document {
  [key: string]: any;
}

const ResimlerSchema = new Schema(
  {
    // Optionally define some known fields, but strict: false handles the rest
  },
  { 
    strict: false, 
    timestamps: true 
  }
);

// Prevent mongoose from recompiling the model upon hot reload
const Resimler = mongoose.models.Resimler || mongoose.model<IResimler>("Resimler", ResimlerSchema, "resimler");

export default Resimler;
