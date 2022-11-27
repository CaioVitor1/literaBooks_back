import { Request, Response } from "express";
import * as uploadService from "../services/uploadService";

export async function uploadImage(req: Request, res: Response){
//return res.json(req.file?.filename)
let nome = ""

if(req.file){
    const image = req.file
    return res.json({
        erro: false,
        message: "Upload realizado com sucesso",
        content: image
    })
} else{
    return res.status(400).json({
        erro: true,
        message: "Uploado não realizado"
    })
}

}

export async function listImage(req: Request, res: Response){
    const userId = res.locals.session;
    const image = await uploadService.getImageName(Number(userId)) 

    return res.status(200).send(image)
}