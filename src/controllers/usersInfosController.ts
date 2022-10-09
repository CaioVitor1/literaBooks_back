import { Request, Response } from "express";
import * as usersInfosService from "../services/usersInfosService";

export async function getInfoUsers(req: Request, res: Response){
    const userId = res.locals.session;
    const infos = await usersInfosService.getInfoUsers(Number(userId))
    return res.status(200).send(infos)

}


export async function getEveryUsers(req: Request, res: Response){

    const users = await usersInfosService.getEveryUsers()
    return res.status(200).send(users)
}