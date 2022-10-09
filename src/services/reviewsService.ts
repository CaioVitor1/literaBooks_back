import { IReviewData } from "../types/reviewsTypes";
import * as reviewRepository from "../repositories/reviewsRepository";

export async function newReview(userId: number, review: IReviewData){
const newReview = reviewRepository.insertReview(userId, review)
}

export async function getReviews(userId: number){
    const lookFavoriteGenres = await reviewRepository.findFavoriteGenres(userId)
    console.log(lookFavoriteGenres)

    const genre1 = lookFavoriteGenres[0].genreId
    const genre2 = lookFavoriteGenres[1].genreId
    const genre3 = lookFavoriteGenres[2].genreId

    const lookFirstRecommendations = await reviewRepository.findRecommendations(genre1)
    const lookSecondRecommendations = await reviewRepository.findRecommendations(genre2)
    const lookThirtRecommendations = await reviewRepository.findRecommendations(genre2)

    console.log(lookFirstRecommendations)
    console.log(lookSecondRecommendations)
    console.log(lookThirtRecommendations)
    
    const recommendations = [{
        first: lookFirstRecommendations,
        second: lookSecondRecommendations,
        thirt: lookThirtRecommendations
    }]
    return recommendations
}