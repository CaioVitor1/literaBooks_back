import { Request, Response } from 'express';
import * as usersService from '../services/usersService';
import { IUserData } from '../types/usersType';

export async function signUp(req: Request, res: Response) {
	const user: IUserData = req.body;
	const token = await usersService.createUser(user);
	return res.status(201).send(token);
}

export async function signIn(req: Request, res: Response){
	const user: IUserData = req.body;
	const token = await usersService.login(user);
	return res.status(200).send(token);
}