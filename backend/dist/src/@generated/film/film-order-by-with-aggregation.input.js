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
exports.FilmOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const film_count_order_by_aggregate_input_1 = require("./film-count-order-by-aggregate.input");
const film_avg_order_by_aggregate_input_1 = require("./film-avg-order-by-aggregate.input");
const film_max_order_by_aggregate_input_1 = require("./film-max-order-by-aggregate.input");
const film_min_order_by_aggregate_input_1 = require("./film-min-order-by-aggregate.input");
const film_sum_order_by_aggregate_input_1 = require("./film-sum-order-by-aggregate.input");
let FilmOrderByWithAggregationInput = class FilmOrderByWithAggregationInput {
};
exports.FilmOrderByWithAggregationInput = FilmOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], FilmOrderByWithAggregationInput.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "director_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FilmOrderByWithAggregationInput.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_count_order_by_aggregate_input_1.FilmCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", film_count_order_by_aggregate_input_1.FilmCountOrderByAggregateInput)
], FilmOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_avg_order_by_aggregate_input_1.FilmAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", film_avg_order_by_aggregate_input_1.FilmAvgOrderByAggregateInput)
], FilmOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_max_order_by_aggregate_input_1.FilmMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", film_max_order_by_aggregate_input_1.FilmMaxOrderByAggregateInput)
], FilmOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_min_order_by_aggregate_input_1.FilmMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", film_min_order_by_aggregate_input_1.FilmMinOrderByAggregateInput)
], FilmOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_sum_order_by_aggregate_input_1.FilmSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", film_sum_order_by_aggregate_input_1.FilmSumOrderByAggregateInput)
], FilmOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.FilmOrderByWithAggregationInput = FilmOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], FilmOrderByWithAggregationInput);
//# sourceMappingURL=film-order-by-with-aggregation.input.js.map