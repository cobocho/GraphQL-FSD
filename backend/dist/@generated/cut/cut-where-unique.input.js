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
exports.CutWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const cut_where_input_1 = require("./cut-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const film_scalar_relation_filter_input_1 = require("../prisma/film-scalar-relation-filter.input");
let CutWhereUniqueInput = class CutWhereUniqueInput {
};
exports.CutWhereUniqueInput = CutWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CutWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_input_1.CutWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CutWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_input_1.CutWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CutWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_where_input_1.CutWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CutWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CutWhereUniqueInput.prototype, "src", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], CutWhereUniqueInput.prototype, "filmId", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_scalar_relation_filter_input_1.FilmScalarRelationFilter, { nullable: true }),
    __metadata("design:type", film_scalar_relation_filter_input_1.FilmScalarRelationFilter)
], CutWhereUniqueInput.prototype, "film", void 0);
exports.CutWhereUniqueInput = CutWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], CutWhereUniqueInput);
//# sourceMappingURL=cut-where-unique.input.js.map