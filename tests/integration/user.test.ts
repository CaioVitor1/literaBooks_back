import app from "../../src/app";
import supertest from "supertest";
import client from "../../src/database/postgres";
import * as userFactory from "../factories/userFactory";

beforeEach(async () => {
	await client.$executeRaw`TRUNCATE TABLE users;`;
});
 
// escrever um describe para cada rota;

describe("create a new user", () => {

	it("given a valid body it should return 201", async () => {
      
		const body = await userFactory.createBodyUser()
        console.log(body)
		const result = await supertest(app).post("/signup")
			.send(body);
		expect(result.status).toEqual(201);
	});


});