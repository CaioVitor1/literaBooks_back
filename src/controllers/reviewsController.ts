import * as reviewsService from "../services/reviewsService"
import { Request, Response } from "express";
import { IReviewData } from "../types/reviewsTypes";

export async function newReview(req: Request, res: Response){
    //const userId = res.locals.session;
    const userId = 1;
    const review: IReviewData = req.body;
    const newReview = await reviewsService.newReview(Number(userId), review)

    return res.status(201).send(review)
}

export async function getReviews(req: Request, res: Response){
    const userId = res.locals.session;
    const reviews = await reviewsService.getReviews(Number(userId))

    return res.status(200).send(reviews)
}