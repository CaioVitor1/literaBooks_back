"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
const schemaValidator_1 = require("../middlewares/schemaValidator");
const usersSchema_1 = require("../schemas/usersSchema");
const usersRouter = (0, express_1.Router)();
usersRouter.post("/signup", (0, schemaValidator_1.validateSchema)(usersSchema_1.signUpSchema), usersControllers_1.signUp);
usersRouter.post("/signin", (0, schemaValidator_1.validateSchema)(usersSchema_1.signInSchema), usersControllers_1.signIn);
exports.default = usersRouter;