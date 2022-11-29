import { Request, Response } from "express";
import * as usersInfosService from "../services/usersInfosService";

export async function getInfoUsers(req: Request, res: Response){
    const userId = res.locals.session;
    console.log("estamos aqui no teste. O user ID é: ")
    console.log(userId)
    const infos = await usersInfosService.getInfoUsers(Number(userId))
    return res.status(200).send(infos)

}


export async function getEveryUsers(req: Request, res: Response){

    const users = await usersInfosService.getEveryUsers()
    return res.status(200).send(users)
}

export async function getInfoVisit(req: Request, res: Response) {
    const {idUser} = req.params
    console.log(idUser)
    const info = await usersInfosService.getInfoUsers(Number(idUser))

    return res.status(200).send(info)


}