/* eslint-disable @typescript-eslint/no-unused-vars */
import app from "../../src/app";
import supertest from "supertest";
import client from "../../src/database/postgres";
import * as reviewFactory from "../factories/reviewFactory";


 
// escrever um describe para cada rota;

describe("create a new review", () => {

	it("given a invalid body it should return 201", async () => {
      
		const body = await reviewFactory.createBodyReview();
		
		console.log("o body é")
		console.log(body)
		console.log("o token é: ")
		
		const token = await reviewFactory.makeLogin()
		console.log(token)

		const result = await supertest(app).post("/reviews/register")
		.set({Authorization: `Bearer ${token}`})	
		.send(body);
		expect(result.status).toEqual(201);
	});

	

});






