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
exports.CutOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const cut_count_order_by_aggregate_input_1 = require("./cut-count-order-by-aggregate.input");
const cut_avg_order_by_aggregate_input_1 = require("./cut-avg-order-by-aggregate.input");
const cut_max_order_by_aggregate_input_1 = require("./cut-max-order-by-aggregate.input");
const cut_min_order_by_aggregate_input_1 = require("./cut-min-order-by-aggregate.input");
const cut_sum_order_by_aggregate_input_1 = require("./cut-sum-order-by-aggregate.input");
let CutOrderByWithAggregationInput = class CutOrderByWithAggregationInput {
};
exports.CutOrderByWithAggregationInput = CutOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CutOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CutOrderByWithAggregationInput.prototype, "src", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CutOrderByWithAggregationInput.prototype, "filmId", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_count_order_by_aggregate_input_1.CutCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", cut_count_order_by_aggregate_input_1.CutCountOrderByAggregateInput)
], CutOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_avg_order_by_aggregate_input_1.CutAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", cut_avg_order_by_aggregate_input_1.CutAvgOrderByAggregateInput)
], CutOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_max_order_by_aggregate_input_1.CutMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", cut_max_order_by_aggregate_input_1.CutMaxOrderByAggregateInput)
], CutOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_min_order_by_aggregate_input_1.CutMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", cut_min_order_by_aggregate_input_1.CutMinOrderByAggregateInput)
], CutOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_sum_order_by_aggregate_input_1.CutSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", cut_sum_order_by_aggregate_input_1.CutSumOrderByAggregateInput)
], CutOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.CutOrderByWithAggregationInput = CutOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CutOrderByWithAggregationInput);
//# sourceMappingURL=cut-order-by-with-aggregation.input.js.map