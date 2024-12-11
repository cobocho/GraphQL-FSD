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
exports.FilmUpdateOneRequiredWithoutCutNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_create_without_cut_input_1 = require("./film-create-without-cut.input");
const class_transformer_1 = require("class-transformer");
const film_create_or_connect_without_cut_input_1 = require("./film-create-or-connect-without-cut.input");
const film_upsert_without_cut_input_1 = require("./film-upsert-without-cut.input");
const client_1 = require("@prisma/client");
const film_where_unique_input_1 = require("./film-where-unique.input");
const film_update_to_one_with_where_without_cut_input_1 = require("./film-update-to-one-with-where-without-cut.input");
let FilmUpdateOneRequiredWithoutCutNestedInput = class FilmUpdateOneRequiredWithoutCutNestedInput {
};
exports.FilmUpdateOneRequiredWithoutCutNestedInput = FilmUpdateOneRequiredWithoutCutNestedInput;
__decorate([
    (0, graphql_1.Field)(() => film_create_without_cut_input_1.FilmCreateWithoutCutInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_create_without_cut_input_1.FilmCreateWithoutCutInput),
    __metadata("design:type", film_create_without_cut_input_1.FilmCreateWithoutCutInput)
], FilmUpdateOneRequiredWithoutCutNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_create_or_connect_without_cut_input_1.FilmCreateOrConnectWithoutCutInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_create_or_connect_without_cut_input_1.FilmCreateOrConnectWithoutCutInput),
    __metadata("design:type", film_create_or_connect_without_cut_input_1.FilmCreateOrConnectWithoutCutInput)
], FilmUpdateOneRequiredWithoutCutNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_upsert_without_cut_input_1.FilmUpsertWithoutCutInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_upsert_without_cut_input_1.FilmUpsertWithoutCutInput),
    __metadata("design:type", film_upsert_without_cut_input_1.FilmUpsertWithoutCutInput)
], FilmUpdateOneRequiredWithoutCutNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_where_unique_input_1.FilmWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_where_unique_input_1.FilmWhereUniqueInput),
    __metadata("design:type", Object)
], FilmUpdateOneRequiredWithoutCutNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_update_to_one_with_where_without_cut_input_1.FilmUpdateToOneWithWhereWithoutCutInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_update_to_one_with_where_without_cut_input_1.FilmUpdateToOneWithWhereWithoutCutInput),
    __metadata("design:type", film_update_to_one_with_where_without_cut_input_1.FilmUpdateToOneWithWhereWithoutCutInput)
], FilmUpdateOneRequiredWithoutCutNestedInput.prototype, "update", void 0);
exports.FilmUpdateOneRequiredWithoutCutNestedInput = FilmUpdateOneRequiredWithoutCutNestedInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUpdateOneRequiredWithoutCutNestedInput);
//# sourceMappingURL=film-update-one-required-without-cut-nested.input.js.map