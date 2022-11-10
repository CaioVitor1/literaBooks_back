import { Router } from "express";
import { uploadImage } from "../controllers/uploadController";



const uploadRouter = Router();

uploadRouter.post("/upload", uploadImage);



export default uploadRouter;
