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
exports.FilmOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const director_order_by_with_relation_input_1 = require("../director/director-order-by-with-relation.input");
const cut_order_by_relation_aggregate_input_1 = require("../cut/cut-order-by-relation-aggregate.input");
let FilmOrderByWithRelationInput = class FilmOrderByWithRelationInput {
};
exports.FilmOrderByWithRelationInput = FilmOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], FilmOrderByWithRelationInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "director_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithRelationInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_order_by_with_relation_input_1.DirectorOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", director_order_by_with_relation_input_1.DirectorOrderByWithRelationInput)
], FilmOrderByWithRelationInput.prototype, "director", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_order_by_relation_aggregate_input_1.CutOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", cut_order_by_relation_aggregate_input_1.CutOrderByRelationAggregateInput)
], FilmOrderByWithRelationInput.prototype, "Cut", void 0);
exports.FilmOrderByWithRelationInput = FilmOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], FilmOrderByWithRelationInput);
//# sourceMappingURL=film-order-by-with-relation.input.js.map