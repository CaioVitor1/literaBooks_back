import { Router } from "express";
import preferencesRouter from "./preferencesRouter";
import usersRouter from "./usersRouter";


const router = Router();
router.use(usersRouter)
router.use(preferencesRouter)
export default router;