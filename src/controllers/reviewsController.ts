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

export async function getReviewsVisit(req: Request, res: Response){
    const {idUser} = req.params
    console.log(idUser)
    const reviews = await reviewsService.getReviewsUser(Number(idUser))

    return res.status(200).send(reviews)
}

export async function infoUnicReview(req: Request, res: Response){
    const {bookId} = req.params
    console.log(bookId)

    const review = await reviewsService.infoUnicReview(Number(bookId))

    return res.status(200).send(review)
}