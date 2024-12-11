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
exports.FilmUpdateToOneWithWhereWithoutCutInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_where_input_1 = require("./film-where.input");
const class_transformer_1 = require("class-transformer");
const film_update_without_cut_input_1 = require("./film-update-without-cut.input");
let FilmUpdateToOneWithWhereWithoutCutInput = class FilmUpdateToOneWithWhereWithoutCutInput {
};
exports.FilmUpdateToOneWithWhereWithoutCutInput = FilmUpdateToOneWithWhereWithoutCutInput;
__decorate([
    (0, graphql_1.Field)(() => film_where_input_1.FilmWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_where_input_1.FilmWhereInput),
    __metadata("design:type", film_where_input_1.FilmWhereInput)
], FilmUpdateToOneWithWhereWithoutCutInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_update_without_cut_input_1.FilmUpdateWithoutCutInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => film_update_without_cut_input_1.FilmUpdateWithoutCutInput),
    __metadata("design:type", film_update_without_cut_input_1.FilmUpdateWithoutCutInput)
], FilmUpdateToOneWithWhereWithoutCutInput.prototype, "data", void 0);
exports.FilmUpdateToOneWithWhereWithoutCutInput = FilmUpdateToOneWithWhereWithoutCutInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUpdateToOneWithWhereWithoutCutInput);
//# sourceMappingURL=film-update-to-one-with-where-without-cut.input.js.map