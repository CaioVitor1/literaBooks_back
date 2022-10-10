/* eslint-disable @typescript-eslint/no-unused-vars */
import app from "../../src/app";
import supertest from "supertest";
import client from "../../src/database/postgres";
import * as reviewFactory from "../factories/reviewFactory";


 
// escrever um describe para cada rota;

describe("create a new review", () => {

	it("given a invalid body it should return 201", async () => {
      
		const body = await reviewFactory.createBodyReview();
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NTM3NTMyOSwiZXhwIjoxNjY3OTY3MzI5fQ.T0f1p5dks3qHwNJ6zMCfcdBRyFui1f-EA2vin9wdwQk"
		const result = await supertest(app).post("/reviews/register")
		.set({Authorization: `Bearer ${token}`})	
		.send(body);
		expect(result.status).toEqual(201);
	});

	

});
/*
describe("get all recommendations register", () => {


	it("get recommendations ", async () => {

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		//const body = await recomendationFactory.createBodyTest();

		const result = await supertest(app).get("/recommendations");
        
		expect(result.status).toEqual(200);
		expect(result.body).toBeInstanceOf(Array);
    
	});

});

*/



