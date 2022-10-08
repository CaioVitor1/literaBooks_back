import { Router } from "express";
import { choiceFavoriteGenre } from "../controllers/preferencesController";
import { validateToken } from "../middlewares/validateToken";



const preferencesRouter = Router();

preferencesRouter.post("/preferences/genres", validateToken, choiceFavoriteGenre);



export default preferencesRouter;
