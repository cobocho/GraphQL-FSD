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
exports.CutAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const cut_where_input_1 = require("./cut-where.input");
const class_transformer_1 = require("class-transformer");
const cut_order_by_with_relation_input_1 = require("./cut-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const cut_where_unique_input_1 = require("./cut-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const cut_count_aggregate_input_1 = require("./cut-count-aggregate.input");
const cut_avg_aggregate_input_1 = require("./cut-avg-aggregate.input");
const cut_sum_aggregate_input_1 = require("./cut-sum-aggregate.input");
const cut_min_aggregate_input_1 = require("./cut-min-aggregate.input");
const cut_max_aggregate_input_1 = require("./cut-max-aggregate.input");
let CutAggregateArgs = class CutAggregateArgs {
};
exports.CutAggregateArgs = CutAggregateArgs;
__decorate([
    (0, graphql_1.Field)(() => cut_where_input_1.CutWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => cut_where_input_1.CutWhereInput),
    __metadata("design:type", cut_where_input_1.CutWhereInput)
], CutAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cut_order_by_with_relation_input_1.CutOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], CutAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_where_unique_input_1.CutWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], CutAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CutAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CutAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_count_aggregate_input_1.CutCountAggregateInput, { nullable: true }),
    __metadata("design:type", cut_count_aggregate_input_1.CutCountAggregateInput)
], CutAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_avg_aggregate_input_1.CutAvgAggregateInput, { nullable: true }),
    __metadata("design:type", cut_avg_aggregate_input_1.CutAvgAggregateInput)
], CutAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_sum_aggregate_input_1.CutSumAggregateInput, { nullable: true }),
    __metadata("design:type", cut_sum_aggregate_input_1.CutSumAggregateInput)
], CutAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_min_aggregate_input_1.CutMinAggregateInput, { nullable: true }),
    __metadata("design:type", cut_min_aggregate_input_1.CutMinAggregateInput)
], CutAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_max_aggregate_input_1.CutMaxAggregateInput, { nullable: true }),
    __metadata("design:type", cut_max_aggregate_input_1.CutMaxAggregateInput)
], CutAggregateArgs.prototype, "_max", void 0);
exports.CutAggregateArgs = CutAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CutAggregateArgs);
//# sourceMappingURL=cut-aggregate.args.js.map