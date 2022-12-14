"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preferencesRouter_1 = __importDefault(require("./preferencesRouter"));
const recommendationsRouter_1 = __importDefault(require("./recommendationsRouter"));
const reviewsRouter_1 = __importDefault(require("./reviewsRouter"));
const usersInfoRouter_1 = __importDefault(require("./usersInfoRouter"));
const usersRouter_1 = __importDefault(require("./usersRouter"));
const router = (0, express_1.Router)();
router.use(usersRouter_1.default);
router.use(preferencesRouter_1.default);
router.use(usersInfoRouter_1.default);
router.use(reviewsRouter_1.default);
router.use(recommendationsRouter_1.default);
exports.default = router;
