import { Request, Response } from "express";
import * as recommendationsService from "../services/recommendationsService"

export async function getRecommendations(req: Request, res: Response){
    const userId = res.locals.session;
    const recommendations = await recommendationsService.getRecommendations(Number(userId))

    return res.status(200).send(recommendations)
}

export async function getUnicRecommendation(req: Request, res: Response){
    const {bookId} = req.params

    const recommendation = await recommendationsService.infoUnicRecommendation(Number(bookId))

    return res.status(200).send(recommendation)
}