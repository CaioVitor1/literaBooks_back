import client from "../database/postgres"

export async function findRecommendations(genre: number){
    return await client.recommendations.findMany({
        where: {
            genreId: genre
        }
    })
}