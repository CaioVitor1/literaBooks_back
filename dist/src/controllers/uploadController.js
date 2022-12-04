"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listImage = exports.uploadImage = void 0;
const uploadService = __importStar(require("../services/uploadService"));
function uploadImage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //return res.json(req.file?.filename)
        let nome = "";
        if (req.file) {
            const image = req.file;
            return res.json({
                erro: false,
                message: "Upload realizado com sucesso",
                content: image
            });
        }
        else {
            return res.status(400).json({
                erro: true,
                message: "Uploado não realizado"
            });
        }
    });
}
exports.uploadImage = uploadImage;
function listImage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.session;
        const image = yield uploadService.getImageName(Number(userId));
        return res.status(200).send(image);
    });
}
exports.listImage = listImage;
