import { Request, Response } from "express"
import { deleteTodo } from "@/data"

export default (req: Request, res: Response) => {
  const id = req.params.id

  deleteTodo(id)

  res.send({ message: "ok" })
}
