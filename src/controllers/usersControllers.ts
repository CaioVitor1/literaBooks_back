import { Request, Response } from "express";
import * as usersService from "../services/usersService";

export async function signUp(req: Request, res: Response) {
    console.log("aqui")
    const user = req.body
    console.log(user)
    const insertedUser = await usersService.createUser()
    return res.status(200).send("ok")
   }
   