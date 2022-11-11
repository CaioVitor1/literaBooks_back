import { Router } from "express";
import { uploadImage } from "../../controllers/uploadController";
import multer from "multer";
import { storage } from "../../middlewares/multerConfig";

const upload = storage

const uploadRouter = Router();

uploadRouter.post("/upload", upload.single('image'), uploadImage);



export default uploadRouter;
