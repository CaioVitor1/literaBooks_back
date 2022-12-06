import { Request, Response } from "express";
import * as uploadService from "../services/uploadService";
import fileUpload from "express-fileupload";
import client from "../database/postgres";

export async function uploadImage(req: Request, res: Response){
//return res.json(req.file?.filename)
let nome = ""
console.log("está aqui")
if(req.file){
    const image = req.file
    await client.imagem.create({
        data: {
            title: image.fieldname,
            image: image.buffer
        }
    })
    return res.json({
        erro: false,
        message: "Upload realizado com sucesso",
        content: image.buffer
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