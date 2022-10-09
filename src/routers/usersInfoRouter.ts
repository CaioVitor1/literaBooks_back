import { Router } from "express";
import { getEveryUsers, getInfoUsers } from "../controllers/usersInfosController";
import { validateToken } from "../middlewares/validateToken";


const infoUsersRouter = Router();

infoUsersRouter.get("/infos/users", validateToken, getInfoUsers);
infoUsersRouter.get("/infos/everyUsers", validateToken, getEveryUsers);

export default infoUsersRouter;
