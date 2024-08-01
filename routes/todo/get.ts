import { Request, Response } from 'express';
import { getTodos } from "@/data"

export default (req: Request, res: Response) => {
  const todos = getTodos();

  res.send(todos);
};