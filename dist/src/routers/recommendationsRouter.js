"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = require("../middlewares/validateToken");
const recommendationsController_1 = require("../controllers/recommendationsController");
const recommendationsRouter = (0, express_1.Router)();
recommendationsRouter.get("/getRecommendations", validateToken_1.validateToken, recommendationsController_1.getRecommendations);
recommendationsRouter.get("/recommendation/:bookId", validateToken_1.validateToken, recommendationsController_1.getUnicRecommendation);
exports.default = recommendationsRouter;
