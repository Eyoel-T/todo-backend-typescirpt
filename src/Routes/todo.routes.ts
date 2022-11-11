import { Router } from "express";
import {
  getTodoList,
  addTodo,
  deleteTodo,
} from "../Controllers/todo.controller";

const router = Router();

router.get("/get-todo-lists", getTodoList);

router.post("/add-todo", addTodo);

router.delete("/delete-todo/:id", deleteTodo);

export default router;
