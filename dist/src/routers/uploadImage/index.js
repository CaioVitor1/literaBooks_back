"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadController_1 = require("../../controllers/uploadController");
const multerConfig_1 = require("../../middlewares/multerConfig");
const validateToken_1 = require("../../middlewares/validateToken");
const upload = multerConfig_1.storage;
const uploadRouter = (0, express_1.Router)();
uploadRouter.post("/upload", upload.single('image'), uploadController_1.uploadImage);
uploadRouter.get('/list-image', validateToken_1.validateToken, uploadController_1.listImage);
exports.default = uploadRouter;
