import { IUserData } from '../types/usersType';
import client from '../database/postgres';

export async function findEmail(user: IUserData) {
	return await client.users.findUnique({where: {
		email: user.email
	}});
}
export async function insertUser(user: IUserData){
	return await client.users.create({
		data: {
			email: user.email,
			password: user.password,
			name: user.name,
			image: user.image
		}
	});
}