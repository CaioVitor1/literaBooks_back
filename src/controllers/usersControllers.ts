import { Request, Response } from "express";
import * as usersService from "../services/usersService";
import { IUserData } from "../types/usersType";
export async function signUp(req: Request, res: Response) {
    console.log("aqui")
    const user: IUserData = req.body
    console.log(user)
    const insertedUser = await usersService.createUser(user)
    return res.status(201).send("User created")
   }
   