import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  
        const { authorization } = req.headers;
        
        if(!authorization) {
            throw { code: "Unauthorized", message: "requisition must have a token" };
        }
        const token:any = authorization?.replace('Bearer ', '');

        const chaveSecreta: any = process.env.JWT_SECRET;
        const {userId}: any = jwt.verify(token,chaveSecreta)
            if(!token || !userId) {
                return res.sendStatus(401);
            }
           
            res.locals.session = userId
           
            next();
}