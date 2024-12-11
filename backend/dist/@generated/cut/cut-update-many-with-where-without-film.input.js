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
exports.CutUpdateManyWithWhereWithoutFilmInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const cut_scalar_where_input_1 = require("./cut-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const cut_update_many_mutation_input_1 = require("./cut-update-many-mutation.input");
let CutUpdateManyWithWhereWithoutFilmInput = class CutUpdateManyWithWhereWithoutFilmInput {
};
exports.CutUpdateManyWithWhereWithoutFilmInput = CutUpdateManyWithWhereWithoutFilmInput;
__decorate([
    (0, graphql_1.Field)(() => cut_scalar_where_input_1.CutScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => cut_scalar_where_input_1.CutScalarWhereInput),
    __metadata("design:type", cut_scalar_where_input_1.CutScalarWhereInput)
], CutUpdateManyWithWhereWithoutFilmInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_update_many_mutation_input_1.CutUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => cut_update_many_mutation_input_1.CutUpdateManyMutationInput),
    __metadata("design:type", cut_update_many_mutation_input_1.CutUpdateManyMutationInput)
], CutUpdateManyWithWhereWithoutFilmInput.prototype, "data", void 0);
exports.CutUpdateManyWithWhereWithoutFilmInput = CutUpdateManyWithWhereWithoutFilmInput = __decorate([
    (0, graphql_2.InputType)()
], CutUpdateManyWithWhereWithoutFilmInput);
//# sourceMappingURL=cut-update-many-with-where-without-film.input.js.map