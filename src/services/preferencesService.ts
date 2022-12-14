import * as preferencesRepository from '../repositories/preferencesRepository';

export async function choiceFavoriteGenre(userId: number, genre1: string, genre2:string, genre3:string){
	const firtsGenre = await preferencesRepository.searchGenre(genre1);
	const secondGenre = await preferencesRepository.searchGenre(genre2);
	const thirtGenre = await preferencesRepository.searchGenre(genre3);
	if(firtsGenre === null || secondGenre === null|| thirtGenre === null){
		throw { code: 'notFound', message: 'this genre is not register' };
	}
	const genre1Id = firtsGenre.id;
	const genre2Id = secondGenre.id;
	const genre3Id = thirtGenre.id;
	await preferencesRepository.insertFavoriteGenre(userId, genre1Id);
	await preferencesRepository.insertFavoriteGenre(userId,genre2Id);
	await preferencesRepository.insertFavoriteGenre(userId,genre3Id);
}
export async function choiceBookAndAuthor(userId: number, favoriteBook: string, favoriteAuthor: string){
	const updateBooksAndAuthor = await preferencesRepository.insertFavoriteBookAndAuthor(userId, favoriteBook, favoriteAuthor);
}
export async function choiceReadingGoals(userId: number, readingGoals: number){
	const updateReadingGoals = await preferencesRepository.insertReadingGoals(userId, readingGoals);
}