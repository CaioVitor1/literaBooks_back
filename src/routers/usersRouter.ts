import { Router } from "express";
import { signUp } from "../controllers/usersControllers";
import { validateSchema } from "../middlewares/schemaValidator";
import { signUpSchema } from "../schemas/usersSchema";


const usersRouter = Router();

usersRouter.post("/signup", validateSchema(signUpSchema), signUp);
//usersRouter.post("/signin", validateSchema(signInSchema), signIn);


export default usersRouter;
