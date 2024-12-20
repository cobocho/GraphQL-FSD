"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmModule = void 0;
const common_1 = require("@nestjs/common");
const film_service_1 = require("./film.service");
const film_resolver_1 = require("./film.resolver");
const director_service_1 = require("../director/director.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let FilmModule = class FilmModule {
};
exports.FilmModule = FilmModule;
exports.FilmModule = FilmModule = __decorate([
    (0, common_1.Module)({
        providers: [film_resolver_1.FilmResolver, film_service_1.FilmService, director_service_1.DirectorService, prisma_service_1.PrismaService],
        exports: [film_service_1.FilmService],
    })
], FilmModule);
//# sourceMappingURL=film.module.js.map