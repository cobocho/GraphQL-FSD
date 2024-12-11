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
exports.CutGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const cut_where_input_1 = require("./cut-where.input");
const class_transformer_1 = require("class-transformer");
const cut_order_by_with_aggregation_input_1 = require("./cut-order-by-with-aggregation.input");
const cut_scalar_field_enum_1 = require("./cut-scalar-field.enum");
const cut_scalar_where_with_aggregates_input_1 = require("./cut-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const cut_count_aggregate_input_1 = require("./cut-count-aggregate.input");
const cut_avg_aggregate_input_1 = require("./cut-avg-aggregate.input");
const cut_sum_aggregate_input_1 = require("./cut-sum-aggregate.input");
const cut_min_aggregate_input_1 = require("./cut-min-aggregate.input");
const cut_max_aggregate_input_1 = require("./cut-max-aggregate.input");
let CutGroupByArgs = class CutGroupByArgs {
};
exports.CutGroupByArgs = CutGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => cut_where_input_1.CutWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_where_input_1.CutWhereInput),
    __metadata("design:type", cut_where_input_1.CutWhereInput)
], CutGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_order_by_with_aggregation_input_1.CutOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CutGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_scalar_field_enum_1.CutScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CutGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_scalar_where_with_aggregates_input_1.CutScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", cut_scalar_where_with_aggregates_input_1.CutScalarWhereWithAggregatesInput)
], CutGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CutGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CutGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_count_aggregate_input_1.CutCountAggregateInput, { nullable: true }),
    __metadata("design:type", cut_count_aggregate_input_1.CutCountAggregateInput)
], CutGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_avg_aggregate_input_1.CutAvgAggregateInput, { nullable: true }),
    __metadata("design:type", cut_avg_aggregate_input_1.CutAvgAggregateInput)
], CutGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_sum_aggregate_input_1.CutSumAggregateInput, { nullable: true }),
    __metadata("design:type", cut_sum_aggregate_input_1.CutSumAggregateInput)
], CutGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_min_aggregate_input_1.CutMinAggregateInput, { nullable: true }),
    __metadata("design:type", cut_min_aggregate_input_1.CutMinAggregateInput)
], CutGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_max_aggregate_input_1.CutMaxAggregateInput, { nullable: true }),
    __metadata("design:type", cut_max_aggregate_input_1.CutMaxAggregateInput)
], CutGroupByArgs.prototype, "_max", void 0);
exports.CutGroupByArgs = CutGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CutGroupByArgs);
//# sourceMappingURL=cut-group-by.args.js.map