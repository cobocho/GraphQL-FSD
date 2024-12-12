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
exports.FilmUpdateWithWhereUniqueWithoutDirectorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const film_where_unique_input_1 = require("./film-where-unique.input");
const class_transformer_1 = require("class-transformer");
const film_update_without_director_input_1 = require("./film-update-without-director.input");
let FilmUpdateWithWhereUniqueWithoutDirectorInput = class FilmUpdateWithWhereUniqueWithoutDirectorInput {
};
exports.FilmUpdateWithWhereUniqueWithoutDirectorInput = FilmUpdateWithWhereUniqueWithoutDirectorInput;
__decorate([
    (0, graphql_1.Field)(() => film_where_unique_input_1.FilmWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => film_where_unique_input_1.FilmWhereUniqueInput),
    __metadata("design:type", Object)
], FilmUpdateWithWhereUniqueWithoutDirectorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_update_without_director_input_1.FilmUpdateWithoutDirectorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => film_update_without_director_input_1.FilmUpdateWithoutDirectorInput),
    __metadata("design:type", film_update_without_director_input_1.FilmUpdateWithoutDirectorInput)
], FilmUpdateWithWhereUniqueWithoutDirectorInput.prototype, "data", void 0);
exports.FilmUpdateWithWhereUniqueWithoutDirectorInput = FilmUpdateWithWhereUniqueWithoutDirectorInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUpdateWithWhereUniqueWithoutDirectorInput);
//# sourceMappingURL=film-update-with-where-unique-without-director.input.js.map