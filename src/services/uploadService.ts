import client from "../database/postgres";
import * as uploadRepository from "../repositories/uploadRepository";

export async function getImageName(userId:number){
    const image = await uploadRepository.findImage(userId)
    if(image === null){
        throw { code: "notFound", message: "this user is not register" };
}
    return image
}