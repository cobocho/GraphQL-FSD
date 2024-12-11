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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedFilms = void 0;
const graphql_1 = require("@nestjs/graphql");
const film_model_1 = require("../../../@generated/film/film.model");
let PaginatedFilms = class PaginatedFilms {
};
exports.PaginatedFilms = PaginatedFilms;
__decorate([
    (0, graphql_1.Field)(() => [film_model_1.Film], { description: '영화 목록' }),
    __metadata("design:type", Array)
], PaginatedFilms.prototype, "films", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: '다음 커서', nullable: true }),
    __metadata("design:type", Number)
], PaginatedFilms.prototype, "cursor", void 0);
exports.PaginatedFilms = PaginatedFilms = __decorate([
    (0, graphql_1.ObjectType)()
], PaginatedFilms);
//# sourceMappingURL=PaginatedFilms.js.map