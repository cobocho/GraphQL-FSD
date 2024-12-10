"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutModule = void 0;
const common_1 = require("@nestjs/common");
const cut_service_1 = require("./cut.service");
const cut_resolver_1 = require("./cut.resolver");
const film_service_1 = require("../modules/film/film.service");
let CutModule = class CutModule {
};
exports.CutModule = CutModule;
exports.CutModule = CutModule = __decorate([
    (0, common_1.Module)({
        providers: [cut_service_1.CutService, cut_resolver_1.CutResolver, film_service_1.FilmService],
    })
], CutModule);
//# sourceMappingURL=cut.module.js.map