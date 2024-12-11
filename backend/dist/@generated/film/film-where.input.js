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
exports.FilmWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const director_scalar_relation_filter_input_1 = require("../prisma/director-scalar-relation-filter.input");
const cut_list_relation_filter_input_1 = require("../cut/cut-list-relation-filter.input");
let FilmWhereInput = class FilmWhereInput {
};
exports.FilmWhereInput = FilmWhereInput;
__decorate([
    (0, graphql_1.Field)(() => [FilmWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FilmWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FilmWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], FilmWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FilmWhereInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], FilmWhereInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], FilmWhereInput.prototype, "director_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_scalar_relation_filter_input_1.DirectorScalarRelationFilter, { nullable: true }),
    __metadata("design:type", director_scalar_relation_filter_input_1.DirectorScalarRelationFilter)
], FilmWhereInput.prototype, "director", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_list_relation_filter_input_1.CutListRelationFilter, { nullable: true }),
    __metadata("design:type", cut_list_relation_filter_input_1.CutListRelationFilter)
], FilmWhereInput.prototype, "Cut", void 0);
exports.FilmWhereInput = FilmWhereInput = __decorate([
    (0, graphql_2.InputType)()
], FilmWhereInput);
//# sourceMappingURL=film-where.input.js.map