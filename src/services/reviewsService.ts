import { IReviewData } from "../types/reviewsTypes";
import * as reviewRepository from "../repositories/reviewsRepository";

export async function newReview(userId: number, review: IReviewData){
    
    const newReview = await reviewRepository.insertReview(userId, review)
    

}

export async function getReviews(userId: number){
    const lookFavoriteGenres = await reviewRepository.findFavoriteGenres(userId)
    console.log(lookFavoriteGenres)

    const genre1 = lookFavoriteGenres[0].genreId
    const genre2 = lookFavoriteGenres[1].genreId
    const genre3 = lookFavoriteGenres[2].genreId

    const lookFirstRecommendations = await reviewRepository.findRecommendations(genre1)
    const lookSecondRecommendations = await reviewRepository.findRecommendations(genre2)
    const lookThirtRecommendations = await reviewRepository.findRecommendations(genre3)

    console.log(lookFirstRecommendations)

    const recommendations = [{
        first: lookFirstRecommendations,
        second: lookSecondRecommendations,
        thirt: lookThirtRecommendations
    }]
    return recommendations
}

export async function getReviewsUser(userId: number){
    const searchReviews = await reviewRepository.findReviewsUser(userId);
    return searchReviews
}

export async function infoUnicReview(bookId: number) {
    const review = await reviewRepository.findReview(bookId)
    return review
}