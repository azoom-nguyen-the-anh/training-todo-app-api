import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  res.send('Welcome to api todo app');
};