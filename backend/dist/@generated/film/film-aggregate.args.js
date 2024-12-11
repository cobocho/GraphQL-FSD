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
exports.FilmAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_where_input_1 = require("./film-where.input");
const class_transformer_1 = require("class-transformer");
const film_order_by_with_relation_input_1 = require("./film-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const film_where_unique_input_1 = require("./film-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const film_count_aggregate_input_1 = require("./film-count-aggregate.input");
const film_avg_aggregate_input_1 = require("./film-avg-aggregate.input");
const film_sum_aggregate_input_1 = require("./film-sum-aggregate.input");
const film_min_aggregate_input_1 = require("./film-min-aggregate.input");
const film_max_aggregate_input_1 = require("./film-max-aggregate.input");
let FilmAggregateArgs = class FilmAggregateArgs {
};
exports.FilmAggregateArgs = FilmAggregateArgs;
__decorate([
    (0, graphql_1.Field)(() => film_where_input_1.FilmWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_where_input_1.FilmWhereInput),
    __metadata("design:type", film_where_input_1.FilmWhereInput)
], FilmAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_order_by_with_relation_input_1.FilmOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FilmAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_where_unique_input_1.FilmWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FilmAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FilmAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FilmAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_count_aggregate_input_1.FilmCountAggregateInput, { nullable: true }),
    __metadata("design:type", film_count_aggregate_input_1.FilmCountAggregateInput)
], FilmAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_avg_aggregate_input_1.FilmAvgAggregateInput, { nullable: true }),
    __metadata("design:type", film_avg_aggregate_input_1.FilmAvgAggregateInput)
], FilmAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_sum_aggregate_input_1.FilmSumAggregateInput, { nullable: true }),
    __metadata("design:type", film_sum_aggregate_input_1.FilmSumAggregateInput)
], FilmAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_min_aggregate_input_1.FilmMinAggregateInput, { nullable: true }),
    __metadata("design:type", film_min_aggregate_input_1.FilmMinAggregateInput)
], FilmAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_max_aggregate_input_1.FilmMaxAggregateInput, { nullable: true }),
    __metadata("design:type", film_max_aggregate_input_1.FilmMaxAggregateInput)
], FilmAggregateArgs.prototype, "_max", void 0);
exports.FilmAggregateArgs = FilmAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FilmAggregateArgs);
//# sourceMappingURL=film-aggregate.args.js.map