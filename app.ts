import "dotenv/config";
import "module-alias/register";
import express from 'express';
import nnn from "nnn-router"
import cors from 'cors';

const app = express();
const router = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().getTime());
  next();
});

const option = {
  routeDir: '/routes',
  baseRouter: router
}

app.use(nnn(option));

app.listen(port, () => console.log('Server is running on http://localhost:' + port));