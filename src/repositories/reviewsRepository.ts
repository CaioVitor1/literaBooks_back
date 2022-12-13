
import client from "../database/postgres";
import { IReviewData } from "../types/reviewsTypes";

export async function insertReview(userId: number, review: IReviewData){
    return await client.reviews.create({
        data: {
            author: review.author,
            description: review.description,
            image: review.image,
            title: review.title,
            genreId: review.genreId,
            userId: userId
        }
    })
}

export async function findFavoriteGenres(userId: number){
    return await client.favoriteGenre.findMany({
        where: {
            userId: userId
        }
    })
}

export async function findRecommendations(genre: number){
    return await client.reviews.findMany({
        where: {
            genreId: genre
        }
    })
}

export async function findReviewsUser(userId: number){
    return await client.reviews.findMany({
        where: {
            userId: userId
        }
    })
}

export async function findReview(bookId: number){
    return await client.reviews.findUnique({
        where: {
            id: bookId
        }
    })
}