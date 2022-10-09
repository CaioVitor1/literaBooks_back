import { Request, Response } from "express";
import * as preferencesService from "../services/preferencesService"; 

export async function choiceFavoriteGenre(req: Request, res: Response){
    const {genre1, genre2, genre3} : {genre1: string, genre2:string, genre3:string} = req.body;
    const userId = res.locals.session
   
    console.log(userId)
    await preferencesService.choiceFavoriteGenre(Number(userId), genre1, genre2, genre3)
    return res.status(201).send("insert preferences with succesful")
}

export async function usersPreferences(req: Request, res: Response){
    const {favoriteBook, favoriteAuthor} : {favoriteBook: string, favoriteAuthor: string} = req.body
    const userId = res.locals.session

    await preferencesService.choiceBookAndAuthor(Number(userId), favoriteBook, favoriteAuthor)
    return res.status(201).send("Favorite Author and books includes in your perfil")

}

export async function choiceReadingGols(req: Request, res: Response){
    const {readingGoals} : {readingGoals: string} = req.body
    const userId = res.locals.session

    await preferencesService.choiceReadingGoals(Number(userId), Number(readingGoals))
    return res.status(200).send("Reading goals includs in your perfil")
}