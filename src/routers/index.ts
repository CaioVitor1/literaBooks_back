import { Router } from "express";
import preferencesRouter from "./preferencesRouter";
import reviewsRouter from "./reviewsRouter";
import uploadRouter from "./uploadImage";
import infoUsersRouter from "./usersInfoRouter";
import usersRouter from "./usersRouter";


const router = Router();
router.use(usersRouter);
router.use(preferencesRouter);
router.use(infoUsersRouter);
router.use(reviewsRouter);
router.use(uploadRouter)
export default router;