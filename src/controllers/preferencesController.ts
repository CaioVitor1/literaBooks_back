import { Request, Response } from "express";
import * as preferencesService from "../services/preferencesService"; 

export async function choiceFavoriteGenre(req: Request, res: Response){
    const {genre1, genre2, genre3} : {genre1: string, genre2:string, genre3:string} = req.body;
    const userId = res.locals.session
   
    console.log(userId)
    await preferencesService.choiceFavoriteGenre(Number(userId), genre1, genre2, genre3)
    return res.status(201).send("insert preferences with succesful")
}