import client from '../database/postgres';
export async function searchGenre(genre: string){
	return await client.genre.findFirst({where: {
		name: genre
	}});
}
export async function insertFavoriteGenre(userId: number, genreId: number){
	return await client.favoriteGenre.create({
		data: {
			userId: userId,
			genreId: genreId
		}
	});
}
export async function insertFavoriteBookAndAuthor(userId: number, favoriteBook: string, favoriteAuthor: string){
	return await client.users.updateMany({
		where: {
			id: userId
		}, data: {
			favoriteAuthor: favoriteAuthor,
			favoriteBook: favoriteBook
		}
	});
}
export async function insertReadingGoals(userId: number, readingGoals: number){
	return await client.users.updateMany({
		where: {
			id: userId
		}, data: {
			readingGoals: readingGoals
		}
	});
}