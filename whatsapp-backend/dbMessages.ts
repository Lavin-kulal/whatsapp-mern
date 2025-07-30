import mongoose, { Document, Schema } from "mongoose";

interface IMessage extends Document {
  message: string;
  name: string;
  timestamp: string;
  received: boolean;
}

const whatsappSchema: Schema<IMessage> = new mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  timestamp: { type: String, required: true },
  received: { type: Boolean, required: true },
});

export default mongoose.model<IMessage>("MessageContent", whatsappSchema);
