import { RequestHandler } from "express";
import Todo from "../Models/todo.model";

const getTodoList: RequestHandler = async (req, res) => {
  try {
    const todoLists = await Todo.find({});
    res.status(200).json({
      success: true,
      message: "This are the lists found on the db",
      todoLists,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    res.status(400).json({ success: false, message: "no list founded" });
  }
};

const addTodo: RequestHandler = async (req, res) => {
  const { title } = req.body as { title: string };

  const newTodo = new Todo({
    title,
  });

  try {
    await newTodo.save();
    res.status(201).json("successfully added new todo");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const deleteTodo: RequestHandler = async (req, res) => {
  const { id } = req.params as { id: string };
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json("todo deleted successfully ");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export { getTodoList, addTodo, deleteTodo };
