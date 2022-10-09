import { Router } from "express";
import { choiceFavoriteGenre, usersPreferences } from "../controllers/preferencesController";
import { validateToken } from "../middlewares/validateToken";




const preferencesRouter = Router();

preferencesRouter.post("/preferences/genres", validateToken, choiceFavoriteGenre);
preferencesRouter.post("/preferences/userspreferences", validateToken, usersPreferences )


export default preferencesRouter;
