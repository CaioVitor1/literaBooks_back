import { Router } from "express";
import { getInfoUsers } from "../controllers/usersInfosController";
import { validateToken } from "../middlewares/validateToken";


const infoUsersRouter = Router();

infoUsersRouter.get("/infos/users", validateToken, getInfoUsers);
infoUsersRouter.get("/infos/recomendations", validateToken, getInfoUsers);

export default infoUsersRouter;
