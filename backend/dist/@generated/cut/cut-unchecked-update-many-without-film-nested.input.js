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
exports.CutUncheckedUpdateManyWithoutFilmNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const cut_create_without_film_input_1 = require("./cut-create-without-film.input");
const class_transformer_1 = require("class-transformer");
const cut_create_or_connect_without_film_input_1 = require("./cut-create-or-connect-without-film.input");
const cut_upsert_with_where_unique_without_film_input_1 = require("./cut-upsert-with-where-unique-without-film.input");
const cut_create_many_film_input_envelope_input_1 = require("./cut-create-many-film-input-envelope.input");
const cut_where_unique_input_1 = require("./cut-where-unique.input");
const cut_update_with_where_unique_without_film_input_1 = require("./cut-update-with-where-unique-without-film.input");
const cut_update_many_with_where_without_film_input_1 = require("./cut-update-many-with-where-without-film.input");
const cut_scalar_where_input_1 = require("./cut-scalar-where.input");
let CutUncheckedUpdateManyWithoutFilmNestedInput = class CutUncheckedUpdateManyWithoutFilmNestedInput {
};
exports.CutUncheckedUpdateManyWithoutFilmNestedInput = CutUncheckedUpdateManyWithoutFilmNestedInput;
__decorate([
    (0, graphql_1.Field)(() => [cut_create_without_film_input_1.CutCreateWithoutFilmInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_create_without_film_input_1.CutCreateWithoutFilmInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_create_or_connect_without_film_input_1.CutCreateOrConnectWithoutFilmInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_create_or_connect_without_film_input_1.CutCreateOrConnectWithoutFilmInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_upsert_with_where_unique_without_film_input_1.CutUpsertWithWhereUniqueWithoutFilmInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_upsert_with_where_unique_without_film_input_1.CutUpsertWithWhereUniqueWithoutFilmInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_create_many_film_input_envelope_input_1.CutCreateManyFilmInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_create_many_film_input_envelope_input_1.CutCreateManyFilmInputEnvelope),
    __metadata("design:type", cut_create_many_film_input_envelope_input_1.CutCreateManyFilmInputEnvelope)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_unique_input_1.CutWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_where_unique_input_1.CutWhereUniqueInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_unique_input_1.CutWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_where_unique_input_1.CutWhereUniqueInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_unique_input_1.CutWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_where_unique_input_1.CutWhereUniqueInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_unique_input_1.CutWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_where_unique_input_1.CutWhereUniqueInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_update_with_where_unique_without_film_input_1.CutUpdateWithWhereUniqueWithoutFilmInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_update_with_where_unique_without_film_input_1.CutUpdateWithWhereUniqueWithoutFilmInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_update_many_with_where_without_film_input_1.CutUpdateManyWithWhereWithoutFilmInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_update_many_with_where_without_film_input_1.CutUpdateManyWithWhereWithoutFilmInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_scalar_where_input_1.CutScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_scalar_where_input_1.CutScalarWhereInput),
    __metadata("design:type", Array)
], CutUncheckedUpdateManyWithoutFilmNestedInput.prototype, "deleteMany", void 0);
exports.CutUncheckedUpdateManyWithoutFilmNestedInput = CutUncheckedUpdateManyWithoutFilmNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CutUncheckedUpdateManyWithoutFilmNestedInput);
//# sourceMappingURL=cut-unchecked-update-many-without-film-nested.input.js.map