import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { getRecommendations, getUnicRecommendation } from "../controllers/recommendationsController";

const recommendationsRouter = Router();


recommendationsRouter.get("/getRecommendations", validateToken, getRecommendations)
recommendationsRouter.get("/recommendation/:bookId",validateToken, getUnicRecommendation)
export default recommendationsRouter;