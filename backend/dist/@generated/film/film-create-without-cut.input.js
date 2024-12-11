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
exports.FilmCreateWithoutCutInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const director_create_nested_one_without_films_input_1 = require("../director/director-create-nested-one-without-films.input");
let FilmCreateWithoutCutInput = class FilmCreateWithoutCutInput {
};
exports.FilmCreateWithoutCutInput = FilmCreateWithoutCutInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmCreateWithoutCutInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FilmCreateWithoutCutInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmCreateWithoutCutInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmCreateWithoutCutInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], FilmCreateWithoutCutInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmCreateWithoutCutInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmCreateWithoutCutInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_create_nested_one_without_films_input_1.DirectorCreateNestedOneWithoutFilmsInput, { nullable: false }),
    __metadata("design:type", director_create_nested_one_without_films_input_1.DirectorCreateNestedOneWithoutFilmsInput)
], FilmCreateWithoutCutInput.prototype, "director", void 0);
exports.FilmCreateWithoutCutInput = FilmCreateWithoutCutInput = __decorate([
    (0, graphql_2.InputType)()
], FilmCreateWithoutCutInput);
//# sourceMappingURL=film-create-without-cut.input.js.map