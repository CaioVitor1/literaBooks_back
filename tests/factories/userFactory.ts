import {faker} from "@faker-js/faker";
import app from "../../src/app";
import supertest from "supertest";
import client from "../../src/database/postgres"

export async function createBodyUser(){
	return {
        name: faker.lorem.words(1),
        email: faker.internet.email(),
        password: "Caio123*",   
        image: "https://5934488p.ha.azioncdn.net/capas-livros/9788580570458-david-nicholls-um-dia-3826118685.jpg"
	};

}

