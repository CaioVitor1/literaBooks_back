import * as usersInfosRepository from "../repositories/usersInfosRepository";

export async function getInfoUsers(userId: number){
const infos = await usersInfosRepository.findInfoUsers(userId);
if(infos === null) {
    throw { code: "notFound", message: "this user is not register" };
}
return infos
}