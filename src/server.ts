import express from "express";
import UserRouter from "./routes/UserRoutes";
import PostRouter from "./routes/PostRoutes";
import CommentRouter from "./routes/CommentRoutes"; 
import AuthRouter from "./routes/AuthRouter"; 
import { config } from 'dotenv';

config();

const port = 3000;

const app = express();
app.use(express.json());

app.use(AuthRouter)
app.use(UserRouter);
app.use(PostRouter);
app.use(CommentRouter);

app.listen(port, function () {
  console.log("Servidor rodando na porta " + port);
});
