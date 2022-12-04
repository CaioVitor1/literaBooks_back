"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBodyUser = void 0;
const faker_1 = require("@faker-js/faker");
function createBodyUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            name: faker_1.faker.lorem.words(1),
            email: faker_1.faker.internet.email(),
            password: "Caio123*",
            image: "https://5934488p.ha.azioncdn.net/capas-livros/9788580570458-david-nicholls-um-dia-3826118685.jpg",
            readingGoals: 3
        };
    });
}
exports.createBodyUser = createBodyUser;
