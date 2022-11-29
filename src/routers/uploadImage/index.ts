import { Router } from "express";
import { listImage, uploadImage } from "../../controllers/uploadController";
import multer from "multer";
import express from "express";
import path from "path"
import { storage } from "../../middlewares/multerConfig";
import { validateToken } from "../../middlewares/validateToken";

const upload = storage

const uploadRouter = Router();

uploadRouter.post("/upload", upload.single('image'), uploadImage);
uploadRouter.get('/list-image', validateToken, listImage)



export default uploadRouter;
