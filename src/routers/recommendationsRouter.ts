import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { getRecommendations } from "../controllers/recommendationsController";

const recommendationsRouter = Router();


recommendationsRouter.get("/getRecommendations", validateToken, getRecommendations)

export default recommendationsRouter;