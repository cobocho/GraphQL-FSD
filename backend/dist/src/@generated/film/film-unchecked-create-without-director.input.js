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
exports.FilmUncheckedCreateWithoutDirectorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const cut_unchecked_create_nested_many_without_film_input_1 = require("../cut/cut-unchecked-create-nested-many-without-film.input");
let FilmUncheckedCreateWithoutDirectorInput = class FilmUncheckedCreateWithoutDirectorInput {
};
exports.FilmUncheckedCreateWithoutDirectorInput = FilmUncheckedCreateWithoutDirectorInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_unchecked_create_nested_many_without_film_input_1.CutUncheckedCreateNestedManyWithoutFilmInput, { nullable: true }),
    __metadata("design:type", cut_unchecked_create_nested_many_without_film_input_1.CutUncheckedCreateNestedManyWithoutFilmInput)
], FilmUncheckedCreateWithoutDirectorInput.prototype, "Cut", void 0);
exports.FilmUncheckedCreateWithoutDirectorInput = FilmUncheckedCreateWithoutDirectorInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUncheckedCreateWithoutDirectorInput);
//# sourceMappingURL=film-unchecked-create-without-director.input.js.map