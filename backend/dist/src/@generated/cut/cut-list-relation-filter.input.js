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
exports.CutListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const cut_where_input_1 = require("./cut-where.input");
let CutListRelationFilter = class CutListRelationFilter {
};
exports.CutListRelationFilter = CutListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => cut_where_input_1.CutWhereInput, { nullable: true }),
    __metadata("design:type", cut_where_input_1.CutWhereInput)
], CutListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_where_input_1.CutWhereInput, { nullable: true }),
    __metadata("design:type", cut_where_input_1.CutWhereInput)
], CutListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_where_input_1.CutWhereInput, { nullable: true }),
    __metadata("design:type", cut_where_input_1.CutWhereInput)
], CutListRelationFilter.prototype, "none", void 0);
exports.CutListRelationFilter = CutListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], CutListRelationFilter);
//# sourceMappingURL=cut-list-relation-filter.input.js.map