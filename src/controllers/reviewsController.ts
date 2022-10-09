import * as reviewsService from "../services/reviewsService"
import { Request, Response } from "express";
import { IReviewData } from "../types/reviewsTypes";

export async function newReview(req: Request, res: Response){
    const userId = res.locals.session;
    const review: IReviewData = req.body;
    console.log("Olá, está aqui")
    console.log(review)
    const newReview = await reviewsService.newReview(Number(userId), review)
    console.log(userId)
    return res.status(201).send("new review add")
}

export async function getRecommendations(req: Request, res: Response){
    const userId = res.locals.session;
    const reviews = await reviewsService.getReviews(Number(userId))

    return res.status(200).send(reviews)
}

export async function getReviewsUser(req: Request, res: Response){
    const userId = res.locals.session;
    const reviews = await reviewsService.getReviewsUser(Number(userId))

    return res.status(200).send(reviews)
}