import {faker} from '@faker-js/faker';
import app from '../../src/app';
import supertest from 'supertest';
import client from '../../src/database/postgres';
import * as userFactory from '../factories/userFactory';
export async function createBodyReview(){
	return {
		title: faker.lorem.words(1),
		image: 'https://5934488p.ha.azioncdn.net/capas-livros/9788580570458-david-nicholls-um-dia-3826118685.jpg',
		author: faker.lorem.words(1),      
		genreId: 1,
		description: faker.lorem.words(20)
	};

}

export async function makeLogin(){
	const user = await userFactory.createBodyUser();
	const createUser = await supertest(app).post('/signup').send(user);

	expect(createUser.status).toEqual(201);

	const login = await supertest(app).post('/signin').send({
		email: user.email,
		password: user.password
	});
	const token  = login.text;
	return token;
        
}
