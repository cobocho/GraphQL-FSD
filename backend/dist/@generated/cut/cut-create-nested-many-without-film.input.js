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
exports.CutCreateNestedManyWithoutFilmInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const cut_create_without_film_input_1 = require("./cut-create-without-film.input");
const class_transformer_1 = require("class-transformer");
const cut_create_or_connect_without_film_input_1 = require("./cut-create-or-connect-without-film.input");
const cut_create_many_film_input_envelope_input_1 = require("./cut-create-many-film-input-envelope.input");
const cut_where_unique_input_1 = require("./cut-where-unique.input");
let CutCreateNestedManyWithoutFilmInput = class CutCreateNestedManyWithoutFilmInput {
};
exports.CutCreateNestedManyWithoutFilmInput = CutCreateNestedManyWithoutFilmInput;
__decorate([
    (0, graphql_1.Field)(() => [cut_create_without_film_input_1.CutCreateWithoutFilmInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_create_without_film_input_1.CutCreateWithoutFilmInput),
    __metadata("design:type", Array)
], CutCreateNestedManyWithoutFilmInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_create_or_connect_without_film_input_1.CutCreateOrConnectWithoutFilmInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_create_or_connect_without_film_input_1.CutCreateOrConnectWithoutFilmInput),
    __metadata("design:type", Array)
], CutCreateNestedManyWithoutFilmInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_create_many_film_input_envelope_input_1.CutCreateManyFilmInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_create_many_film_input_envelope_input_1.CutCreateManyFilmInputEnvelope),
    __metadata("design:type", cut_create_many_film_input_envelope_input_1.CutCreateManyFilmInputEnvelope)
], CutCreateNestedManyWithoutFilmInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_unique_input_1.CutWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_where_unique_input_1.CutWhereUniqueInput),
    __metadata("design:type", Array)
], CutCreateNestedManyWithoutFilmInput.prototype, "connect", void 0);
exports.CutCreateNestedManyWithoutFilmInput = CutCreateNestedManyWithoutFilmInput = __decorate([
    (0, graphql_2.InputType)()
], CutCreateNestedManyWithoutFilmInput);
//# sourceMappingURL=cut-create-nested-many-without-film.input.js.map