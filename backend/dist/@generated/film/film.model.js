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
exports.Film = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const director_model_1 = require("../director/director.model");
const cut_model_1 = require("../cut/cut.model");
const film_count_output_1 = require("./film-count.output");
let Film = class Film {
};
exports.Film = Film;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Film.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Film.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Film.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Film.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Film.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], Film.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], Film.prototype, "director_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Film.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Film.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_model_1.Director, { nullable: false }),
    __metadata("design:type", director_model_1.Director)
], Film.prototype, "director", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_model_1.Cut], { nullable: true }),
    __metadata("design:type", Array)
], Film.prototype, "Cut", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_count_output_1.FilmCount, { nullable: false }),
    __metadata("design:type", film_count_output_1.FilmCount)
], Film.prototype, "_count", void 0);
exports.Film = Film = __decorate([
    (0, graphql_2.ObjectType)()
], Film);
//# sourceMappingURL=film.model.js.map