import client from "../database/postgres";

export async function findImage(userId: number){
    return await client.users.findUnique({
        where:{
            id: userId
        }
    })
}