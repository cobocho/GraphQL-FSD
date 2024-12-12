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
exports.DirectorWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const film_list_relation_filter_input_1 = require("../film/film-list-relation-filter.input");
let DirectorWhereInput = class DirectorWhereInput {
};
exports.DirectorWhereInput = DirectorWhereInput;
__decorate([
    (0, graphql_1.Field)(() => [DirectorWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DirectorWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DirectorWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DirectorWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DirectorWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DirectorWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], DirectorWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], DirectorWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_list_relation_filter_input_1.FilmListRelationFilter, { nullable: true }),
    __metadata("design:type", film_list_relation_filter_input_1.FilmListRelationFilter)
], DirectorWhereInput.prototype, "films", void 0);
exports.DirectorWhereInput = DirectorWhereInput = __decorate([
    (0, graphql_2.InputType)()
], DirectorWhereInput);
//# sourceMappingURL=director-where.input.js.map