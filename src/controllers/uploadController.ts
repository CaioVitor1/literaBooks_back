import { Request, Response } from "express";

export async function uploadImage(req: Request, res: Response){
//return res.json(req.file?.filename)
if(req.file){
    return res.json({
        erro: false,
        message: "Upload realizado com sucesso"
    })
} else{
    return res.status(400).json({
        erro: true,
        message: "Uploado não realizado"
    })
}

}