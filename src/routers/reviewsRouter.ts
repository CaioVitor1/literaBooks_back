import { Router } from "express";
import { getRecommendations, getReviewsUser, getReviewsVisit, infoUnicReview, newReview } from "../controllers/reviewsController";
import { validateSchema } from "../middlewares/schemaValidator";
import { validateToken } from "../middlewares/validateToken";
import { newReviewSchema } from "../schemas/reviewSchema";

const reviewsRouter = Router();

reviewsRouter.post("/reviews/register", validateToken, validateSchema(newReviewSchema), newReview);
reviewsRouter.get("/reviews/getRecommendations", validateToken, getRecommendations)
reviewsRouter.get("/reviews/user", validateToken, getReviewsUser)
reviewsRouter.get("/reviews/user/:idUser", validateToken, getReviewsVisit)
reviewsRouter.get("/reviews/:bookId", validateToken, infoUnicReview)
export default reviewsRouter;
