import { Router } from "express";
import { getEveryUsers, getInfoUsers, getInfoVisit } from "../controllers/usersInfosController";
import { validateToken } from "../middlewares/validateToken";


const infoUsersRouter = Router();

infoUsersRouter.get("/infos/users", validateToken, getInfoUsers);
infoUsersRouter.get("/infos/users/:idUser", validateToken, getInfoVisit);
infoUsersRouter.get("/infos/everyUsers", validateToken, getEveryUsers);

export default infoUsersRouter;
