import {faker} from '@faker-js/faker';
import app from '../../src/app';
import supertest from 'supertest';
import client from '../../src/database/postgres';
import * as userFactory from '../factories/userFactory';
export async function createBodyPreferences(){
	return {
		genre1: 'infantil',
		genre2: 'infantil',
		genre3: 'infantil',      
        
	};

}


