import { Router } from "express";
import preferencesRouter from "./preferencesRouter";
import recommendationsRouter from "./recommendationsRouter";
import reviewsRouter from "./reviewsRouter";
import uploadRouter from "./uploadImage";
import infoUsersRouter from "./usersInfoRouter";
import usersRouter from "./usersRouter";


const router = Router();
router.use(usersRouter);
router.use(preferencesRouter);
router.use(infoUsersRouter);
router.use(reviewsRouter);
router.use(uploadRouter);
router.use(recommendationsRouter)

export default router;