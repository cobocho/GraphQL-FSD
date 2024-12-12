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
exports.FilmUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const director_update_one_required_without_films_nested_input_1 = require("../director/director-update-one-required-without-films-nested.input");
const cut_update_many_without_film_nested_input_1 = require("../cut/cut-update-many-without-film-nested.input");
let FilmUpdateInput = class FilmUpdateInput {
};
exports.FilmUpdateInput = FilmUpdateInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUpdateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FilmUpdateInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUpdateInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FilmUpdateInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUpdateInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUpdateInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_update_one_required_without_films_nested_input_1.DirectorUpdateOneRequiredWithoutFilmsNestedInput, { nullable: true }),
    __metadata("design:type", director_update_one_required_without_films_nested_input_1.DirectorUpdateOneRequiredWithoutFilmsNestedInput)
], FilmUpdateInput.prototype, "director", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_update_many_without_film_nested_input_1.CutUpdateManyWithoutFilmNestedInput, { nullable: true }),
    __metadata("design:type", cut_update_many_without_film_nested_input_1.CutUpdateManyWithoutFilmNestedInput)
], FilmUpdateInput.prototype, "Cut", void 0);
exports.FilmUpdateInput = FilmUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUpdateInput);
//# sourceMappingURL=film-update.input.js.map