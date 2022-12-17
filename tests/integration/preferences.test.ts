/* eslint-disable @typescript-eslint/no-unused-vars */
import app from '../../src/app';
import supertest from 'supertest';
import client from '../../src/database/postgres';
import * as preferencesFactory from '../factories/preferencesFactory';
import * as reviewFactory from '../factories/reviewFactory';

 
// escrever um describe para cada rota;

describe('choice a reading goals', () => {

	it('choice a reading goals it should return 201', async () => {
      
		const body = {
			readingGoals: '3'
		};
        
		const token = await reviewFactory.makeLogin();
		console.log('está aqui nos testes e o token é: ');
		const result = await supertest(app).post('/preferences/readingGoals')
			.set({Authorization: `Bearer ${token}`})	
			.send(body);
		expect(result.status).toEqual(200);
	});

	

});