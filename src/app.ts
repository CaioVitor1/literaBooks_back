import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import router from "./routers";
import errorHandler from "./middlewares/errorHandlerMiddleware";
import path from "path"
import fileUpload from "express-fileupload"
dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router)
app.use(errorHandler);
app.use('/upload', express.static('src/assets/uploads/'));
app.use(fileUpload())



const PORT = Number(process.env.PORT) || 5000;



export default app;

