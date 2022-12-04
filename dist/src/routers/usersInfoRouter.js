"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersInfosController_1 = require("../controllers/usersInfosController");
const validateToken_1 = require("../middlewares/validateToken");
const infoUsersRouter = (0, express_1.Router)();
infoUsersRouter.get("/infos/user", validateToken_1.validateToken, usersInfosController_1.getInfoUsers);
infoUsersRouter.get("/infos/users/:idUser", validateToken_1.validateToken, usersInfosController_1.getInfoVisit);
infoUsersRouter.get("/infos/everyUsers", validateToken_1.validateToken, usersInfosController_1.getEveryUsers);
exports.default = infoUsersRouter;
