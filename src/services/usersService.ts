import * as usersRepository from "../repositories/usersRepository";
import { IUserData } from "../types/usersType";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

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

 //Roles of business: save new user
const newUser = await usersRepository.insertUser(user)
console.log(newUser)

const chave: any = process.env.JWT_SECRET;
const configuracoes = { expiresIn: 60*60*24*30 }
const token = jwt.sign({ userId: newUser.id }, chave, configuracoes); 
return token
        
}

export async function login(user: IUserData){
    ///Roles of business: Verify email and password
  
    const emailUser = await usersRepository.findEmail(user)
    console.log(emailUser)
    if(emailUser === null) {
        throw { code: "Unauthorized", message: "this email is not register" };
    }
    console.log(emailUser)
    if(bcrypt.compareSync(user.password, emailUser.password)) {                             
        const chave: any = process.env.JWT_SECRET;
        const configuracoes = { expiresIn: 60*60*24*30 }
        const token = jwt.sign({ userId: emailUser.id }, chave, configuracoes); 
        return token
    }else{
        throw { code: "Unauthorized", message: "password incorrect" };
    }
}