import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  user: mongoose.Types.ObjectId;
  title: string;
  completed: boolean;
  description?: string;
  dueDate?: Date;
}

const TodoSchema = new Schema<ITodo>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  description: { type: String },
  dueDate: { type: Date },
}, { timestamps: true });

export default mongoose.model<ITodo>("Todo", TodoSchema);
