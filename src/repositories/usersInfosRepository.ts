import client from "../database/postgres";

export async function findInfoUsers(userId: number){
    return await client.users.findUnique({
        where: {
            id: userId
        }
    })
}