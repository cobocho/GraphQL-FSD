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
exports.DirectorGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const director_where_input_1 = require("./director-where.input");
const class_transformer_1 = require("class-transformer");
const director_order_by_with_aggregation_input_1 = require("./director-order-by-with-aggregation.input");
const director_scalar_field_enum_1 = require("./director-scalar-field.enum");
const director_scalar_where_with_aggregates_input_1 = require("./director-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const director_count_aggregate_input_1 = require("./director-count-aggregate.input");
const director_avg_aggregate_input_1 = require("./director-avg-aggregate.input");
const director_sum_aggregate_input_1 = require("./director-sum-aggregate.input");
const director_min_aggregate_input_1 = require("./director-min-aggregate.input");
const director_max_aggregate_input_1 = require("./director-max-aggregate.input");
let DirectorGroupByArgs = class DirectorGroupByArgs {
};
exports.DirectorGroupByArgs = DirectorGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => director_where_input_1.DirectorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_where_input_1.DirectorWhereInput),
    __metadata("design:type", director_where_input_1.DirectorWhereInput)
], DirectorGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [director_order_by_with_aggregation_input_1.DirectorOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], DirectorGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [director_scalar_field_enum_1.DirectorScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], DirectorGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_scalar_where_with_aggregates_input_1.DirectorScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", director_scalar_where_with_aggregates_input_1.DirectorScalarWhereWithAggregatesInput)
], DirectorGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DirectorGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DirectorGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_count_aggregate_input_1.DirectorCountAggregateInput, { nullable: true }),
    __metadata("design:type", director_count_aggregate_input_1.DirectorCountAggregateInput)
], DirectorGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_avg_aggregate_input_1.DirectorAvgAggregateInput, { nullable: true }),
    __metadata("design:type", director_avg_aggregate_input_1.DirectorAvgAggregateInput)
], DirectorGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_sum_aggregate_input_1.DirectorSumAggregateInput, { nullable: true }),
    __metadata("design:type", director_sum_aggregate_input_1.DirectorSumAggregateInput)
], DirectorGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_min_aggregate_input_1.DirectorMinAggregateInput, { nullable: true }),
    __metadata("design:type", director_min_aggregate_input_1.DirectorMinAggregateInput)
], DirectorGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_max_aggregate_input_1.DirectorMaxAggregateInput, { nullable: true }),
    __metadata("design:type", director_max_aggregate_input_1.DirectorMaxAggregateInput)
], DirectorGroupByArgs.prototype, "_max", void 0);
exports.DirectorGroupByArgs = DirectorGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DirectorGroupByArgs);
//# sourceMappingURL=director-group-by.args.js.map