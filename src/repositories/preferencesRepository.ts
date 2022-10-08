import client from "../database/postgres";

export async function searchGenre(genre: string){
    return await client.genre.findFirst({where: {
        name: genre
    }})
}

export async function insertFavoriteGenre(userId: number, genreId: number){
return await client.favoriteGenre.create({
    data: {
    userId: userId,
    genreId: genreId
    }
})
}