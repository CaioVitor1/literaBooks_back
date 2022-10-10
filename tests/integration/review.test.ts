/* eslint-disable @typescript-eslint/no-unused-vars */
import app from "../../src/app";
import supertest from "supertest";
import client from "../../src/database/postgres";
import * as reviewFactory from "../factories/reviewFactory";

beforeEach(async () => {
	await client.$executeRaw`TRUNCATE TABLE reviews;`;
});
 
// escrever um describe para cada rota;

describe("create a new review", () => {

	it("given a invalid body it should return 201", async () => {
      
		const body = await reviewFactory.createBodyTest();

		const result = await supertest(app).post("/reviews/register")
			.send(body);
		expect(result.status).toEqual(201);
	});

	

});

describe("get all recommendations register", () => {


	it("get recommendations ", async () => {

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		//const body = await recomendationFactory.createBodyTest();

		const result = await supertest(app).get("/recommendations");
        
		expect(result.status).toEqual(200);
		expect(result.body).toBeInstanceOf(Array);
    
	});

});





afterAll(async () => {
	await client.$disconnect();
});

