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
exports.FilmGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_where_input_1 = require("./film-where.input");
const class_transformer_1 = require("class-transformer");
const film_order_by_with_aggregation_input_1 = require("./film-order-by-with-aggregation.input");
const film_scalar_field_enum_1 = require("./film-scalar-field.enum");
const film_scalar_where_with_aggregates_input_1 = require("./film-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const film_count_aggregate_input_1 = require("./film-count-aggregate.input");
const film_avg_aggregate_input_1 = require("./film-avg-aggregate.input");
const film_sum_aggregate_input_1 = require("./film-sum-aggregate.input");
const film_min_aggregate_input_1 = require("./film-min-aggregate.input");
const film_max_aggregate_input_1 = require("./film-max-aggregate.input");
let FilmGroupByArgs = class FilmGroupByArgs {
};
exports.FilmGroupByArgs = FilmGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => film_where_input_1.FilmWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_where_input_1.FilmWhereInput),
    __metadata("design:type", film_where_input_1.FilmWhereInput)
], FilmGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_order_by_with_aggregation_input_1.FilmOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_scalar_field_enum_1.FilmScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], FilmGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_scalar_where_with_aggregates_input_1.FilmScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", film_scalar_where_with_aggregates_input_1.FilmScalarWhereWithAggregatesInput)
], FilmGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FilmGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FilmGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_count_aggregate_input_1.FilmCountAggregateInput, { nullable: true }),
    __metadata("design:type", film_count_aggregate_input_1.FilmCountAggregateInput)
], FilmGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_avg_aggregate_input_1.FilmAvgAggregateInput, { nullable: true }),
    __metadata("design:type", film_avg_aggregate_input_1.FilmAvgAggregateInput)
], FilmGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_sum_aggregate_input_1.FilmSumAggregateInput, { nullable: true }),
    __metadata("design:type", film_sum_aggregate_input_1.FilmSumAggregateInput)
], FilmGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_min_aggregate_input_1.FilmMinAggregateInput, { nullable: true }),
    __metadata("design:type", film_min_aggregate_input_1.FilmMinAggregateInput)
], FilmGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_max_aggregate_input_1.FilmMaxAggregateInput, { nullable: true }),
    __metadata("design:type", film_max_aggregate_input_1.FilmMaxAggregateInput)
], FilmGroupByArgs.prototype, "_max", void 0);
exports.FilmGroupByArgs = FilmGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FilmGroupByArgs);
//# sourceMappingURL=film-group-by.args.js.map