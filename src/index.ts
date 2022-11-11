import express from "express";
import cors from "cors";
import todoRoute from "./Routes/todo.routes";
import { connectToLocalDB } from "./Utils/utils";
const app = express();

connectToLocalDB();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/api/todo", todoRoute);
app.get("/", (req, res) => {
  res.send("server is working fine");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
