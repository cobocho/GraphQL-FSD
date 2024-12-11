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
exports.FilmWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const film_where_input_1 = require("./film-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const director_scalar_relation_filter_input_1 = require("../prisma/director-scalar-relation-filter.input");
const cut_list_relation_filter_input_1 = require("../cut/cut-list-relation-filter.input");
let FilmWhereUniqueInput = class FilmWhereUniqueInput {
};
exports.FilmWhereUniqueInput = FilmWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FilmWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_where_input_1.FilmWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_where_input_1.FilmWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_where_input_1.FilmWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereUniqueInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FilmWhereUniqueInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereUniqueInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], FilmWhereUniqueInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], FilmWhereUniqueInput.prototype, "director_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereUniqueInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FilmWhereUniqueInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_scalar_relation_filter_input_1.DirectorScalarRelationFilter, { nullable: true }),
    __metadata("design:type", director_scalar_relation_filter_input_1.DirectorScalarRelationFilter)
], FilmWhereUniqueInput.prototype, "director", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_list_relation_filter_input_1.CutListRelationFilter, { nullable: true }),
    __metadata("design:type", cut_list_relation_filter_input_1.CutListRelationFilter)
], FilmWhereUniqueInput.prototype, "Cut", void 0);
exports.FilmWhereUniqueInput = FilmWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], FilmWhereUniqueInput);
//# sourceMappingURL=film-where-unique.input.js.map