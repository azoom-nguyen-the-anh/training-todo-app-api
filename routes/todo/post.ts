import { Request, Response } from "express";
import { uid } from "uid"
import { addTodo } from "@/data";
  
export default (req: Request, res: Response) => {
  const todo = req.body;
  
  todo.id = uid();

  addTodo(todo);

  res.send(todo);
};

