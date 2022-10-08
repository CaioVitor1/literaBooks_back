import * as usersRepository from "../repositories/usersRepository";
import { IUserData } from "../types/usersType";
import bcrypt from "bcrypt";

export async function createUser(user: IUserData){
//Roles of business: verify if email already exist
const emailUser = await usersRepository.findEmail(user)

console.log(emailUser)
if(emailUser !== null) {
    throw { code: "conflict", message: "this account is already use" };
}
//Roles of business: cripty password
const encryptedPassword = bcrypt.hashSync(user.password, 10);
user.password = encryptedPassword
console.log(user)

 //Roles of business: save new user
const newUser = await usersRepository.insertUser(user)
return newUser
}