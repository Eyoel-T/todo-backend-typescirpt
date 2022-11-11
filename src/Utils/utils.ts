import mongoose, { ConnectOptions } from "mongoose";

export const connectToLocalDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/Todo", {
      useNewUrlParser: true,
    } as ConnectOptions);
    console.log("connected to local db");
  } catch (error) {
    console.log("couldn't connect to local db");
  }
};
