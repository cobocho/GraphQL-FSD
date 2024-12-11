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
exports.FilmUncheckedUpdateWithoutDirectorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const cut_unchecked_update_many_without_film_nested_input_1 = require("../cut/cut-unchecked-update-many-without-film-nested.input");
let FilmUncheckedUpdateWithoutDirectorInput = class FilmUncheckedUpdateWithoutDirectorInput {
};
exports.FilmUncheckedUpdateWithoutDirectorInput = FilmUncheckedUpdateWithoutDirectorInput;
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_unchecked_update_many_without_film_nested_input_1.CutUncheckedUpdateManyWithoutFilmNestedInput, { nullable: true }),
    __metadata("design:type", cut_unchecked_update_many_without_film_nested_input_1.CutUncheckedUpdateManyWithoutFilmNestedInput)
], FilmUncheckedUpdateWithoutDirectorInput.prototype, "Cut", void 0);
exports.FilmUncheckedUpdateWithoutDirectorInput = FilmUncheckedUpdateWithoutDirectorInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUncheckedUpdateWithoutDirectorInput);
//# sourceMappingURL=film-unchecked-update-without-director.input.js.map