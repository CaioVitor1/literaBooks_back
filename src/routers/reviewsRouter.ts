import { Router } from "express";
import { getReviews, newReview } from "../controllers/reviewsController";
import { validateSchema } from "../middlewares/schemaValidator";
import { validateToken } from "../middlewares/validateToken";
import { newReviewSchema } from "../schemas/reviewSchema";

const reviewsRouter = Router();

reviewsRouter.post("/reviews/register", validateSchema(newReviewSchema), newReview);
reviewsRouter.get("/reviews/get", validateToken, getReviews)

export default reviewsRouter;
