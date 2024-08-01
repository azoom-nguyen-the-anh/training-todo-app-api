import { Request, Response } from "express";
import { updateTodo } from "@/data";

export default (req: Request, res: Response) => {
  const id = req.params.id;
  const todo = req.body;

  updateTodo(id, todo);

  res.send({ id, ...todo });
};