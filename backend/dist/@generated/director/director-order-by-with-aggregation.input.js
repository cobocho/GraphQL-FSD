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
exports.DirectorOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const director_count_order_by_aggregate_input_1 = require("./director-count-order-by-aggregate.input");
const director_avg_order_by_aggregate_input_1 = require("./director-avg-order-by-aggregate.input");
const director_max_order_by_aggregate_input_1 = require("./director-max-order-by-aggregate.input");
const director_min_order_by_aggregate_input_1 = require("./director-min-order-by-aggregate.input");
const director_sum_order_by_aggregate_input_1 = require("./director-sum-order-by-aggregate.input");
let DirectorOrderByWithAggregationInput = class DirectorOrderByWithAggregationInput {
};
exports.DirectorOrderByWithAggregationInput = DirectorOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DirectorOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DirectorOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_count_order_by_aggregate_input_1.DirectorCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", director_count_order_by_aggregate_input_1.DirectorCountOrderByAggregateInput)
], DirectorOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_avg_order_by_aggregate_input_1.DirectorAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", director_avg_order_by_aggregate_input_1.DirectorAvgOrderByAggregateInput)
], DirectorOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_max_order_by_aggregate_input_1.DirectorMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", director_max_order_by_aggregate_input_1.DirectorMaxOrderByAggregateInput)
], DirectorOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_min_order_by_aggregate_input_1.DirectorMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", director_min_order_by_aggregate_input_1.DirectorMinOrderByAggregateInput)
], DirectorOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_sum_order_by_aggregate_input_1.DirectorSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", director_sum_order_by_aggregate_input_1.DirectorSumOrderByAggregateInput)
], DirectorOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.DirectorOrderByWithAggregationInput = DirectorOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], DirectorOrderByWithAggregationInput);
//# sourceMappingURL=director-order-by-with-aggregation.input.js.map