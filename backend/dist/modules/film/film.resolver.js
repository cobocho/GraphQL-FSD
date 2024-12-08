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
exports.FilmResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const film_service_1 = require("./film.service");
const film_entity_1 = require("./entities/film.entity");
const director_entity_1 = require("../director/entities/director.entity");
const director_service_1 = require("../director/director.service");
let FilmResolver = class FilmResolver {
    constructor(filmService, directorService) {
        this.filmService = filmService;
        this.directorService = directorService;
    }
    films(cursor, limit) {
        return this.filmService.getFilms(limit, cursor);
    }
    director(film) {
        return this.directorService.getDirector(film.director_id);
    }
};
exports.FilmResolver = FilmResolver;
__decorate([
    (0, graphql_1.Query)(() => film_entity_1.PaginatedFilms),
    __param(0, (0, graphql_1.Args)('cursor', { type: () => graphql_1.Int, nullable: true, defaultValue: 1 })),
    __param(1, (0, graphql_1.Args)('limit', { type: () => graphql_1.Int, nullable: true, defaultValue: 6 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], FilmResolver.prototype, "films", null);
__decorate([
    (0, graphql_1.ResolveField)(() => director_entity_1.Director),
    __param(0, (0, graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [film_entity_1.Film]),
    __metadata("design:returntype", void 0)
], FilmResolver.prototype, "director", null);
exports.FilmResolver = FilmResolver = __decorate([
    (0, graphql_1.Resolver)(() => film_entity_1.Film),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        director_service_1.DirectorService])
], FilmResolver);
//# sourceMappingURL=film.resolver.js.map