"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cut_service_1 = require("./cut.service");
const cut_entity_1 = require("./entities/cut.entity");
const film_entity_1 = require("../modules/film/entities/film.entity");
const film_service_1 = require("../modules/film/film.service");
let CutResolver = class CutResolver {
    constructor(cutService, filmService) {
        this.cutService = cutService;
        this.filmService = filmService;
    }
    cuts(filmId) {
        return this.cutService.getCutByFilmId(filmId);
    }
    film(cut) {
        return this.filmService.getFilmById(cut.filmId);
    }
};
exports.CutResolver = CutResolver;
__decorate([
    (0, graphql_1.Query)(() => [cut_entity_1.Cut]),
    __param(0, (0, graphql_1.Args)('filmId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CutResolver.prototype, "cuts", null);
__decorate([
    (0, graphql_1.ResolveField)(() => film_entity_1.Film),
    __param(0, (0, graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cut_entity_1.Cut]),
    __metadata("design:returntype", void 0)
], CutResolver.prototype, "film", null);
exports.CutResolver = CutResolver = __decorate([
    (0, graphql_1.Resolver)(() => cut_entity_1.Cut),
    __metadata("design:paramtypes", [cut_service_1.CutService,
        film_service_1.FilmService])
], CutResolver);
//# sourceMappingURL=cut.resolver.js.map