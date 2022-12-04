import * as recommendationsRepository from "../repositories/recommendationsRepository";
import * as reviewRepository from "../repositories/reviewsRepository";

export async function getRecommendations(userId: number){
   
    const lookFavoriteGenres = await reviewRepository.findFavoriteGenres(userId)
   

    const genre1 = lookFavoriteGenres[0].genreId
    const genre2 = lookFavoriteGenres[1].genreId
    const genre3 = lookFavoriteGenres[2].genreId

    const lookFirstRecommendations = await recommendationsRepository.findRecommendations(genre1)
    const lookSecondRecommendations = await recommendationsRepository.findRecommendations(genre2)
    const lookThirtRecommendations = await recommendationsRepository.findRecommendations(genre3)

    const recommendations = [{
        first: lookFirstRecommendations,
        second: lookSecondRecommendations,
        thirt: lookThirtRecommendations
    }]
    return recommendations
}