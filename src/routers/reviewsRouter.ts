import { Router } from "express";
import { getRecommendations, getReviewsUser, newReview } from "../controllers/reviewsController";
import { validateSchema } from "../middlewares/schemaValidator";
import { validateToken } from "../middlewares/validateToken";
import { newReviewSchema } from "../schemas/reviewSchema";

const reviewsRouter = Router();

reviewsRouter.post("/reviews/register", validateToken, validateSchema(newReviewSchema), newReview);
reviewsRouter.get("/reviews/getRecommendations", validateToken, getRecommendations)
reviewsRouter.get("/reviews/user", validateToken, getReviewsUser)
export default reviewsRouter;
