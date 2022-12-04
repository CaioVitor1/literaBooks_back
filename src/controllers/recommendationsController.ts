import { Request, Response } from "express";
import * as recommendaionsService from "../services/recommendationsService"

export async function getRecommendations(req: Request, res: Response){
    const userId = res.locals.session;
    const recommendations = await recommendaionsService.getRecommendations(Number(userId))

    return res.status(200).send(recommendations)
}