import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide title for the todo"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
