import app from '../../src/app';
import supertest from 'supertest';
import client from '../../src/database/postgres';
import * as userFactory from '../factories/userFactory';


 
// escrever um describe para cada rota;

describe('Auth route: create a new user and make login', () => {

	it('create a new user it should return 201 and make login return 200', async () => {
      
		const body = await userFactory.createBodyUser();
		console.log(body);
		const createUser = await supertest(app).post('/signup')
			.send(body);
			
		expect(createUser.status).toEqual(201);

		const login = await supertest(app).post('/signin')
			.send({
				email: body.email,
				password: body.password
			});

		expect(login.status).toEqual(200);
	});


});


