"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.storage = ((0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path_1.default.resolve("src/assets/uploads"));
        },
        filename: (req, file, callback) => {
            callback(null, `${file.originalname}`);
        }
    }),
    fileFilter: (req, file, callback) => {
        const extensionImg = ['image/png', 'image/jpg', 'image/jpeg'].find(acceptedFormat => acceptedFormat == file.mimetype);
        if (extensionImg) {
            return callback(null, true);
        }
        else {
            return callback(null, false);
        }
    }
}));
