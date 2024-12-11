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
exports.DirectorAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const director_where_input_1 = require("./director-where.input");
const class_transformer_1 = require("class-transformer");
const director_order_by_with_relation_input_1 = require("./director-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const director_where_unique_input_1 = require("./director-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const director_count_aggregate_input_1 = require("./director-count-aggregate.input");
const director_avg_aggregate_input_1 = require("./director-avg-aggregate.input");
const director_sum_aggregate_input_1 = require("./director-sum-aggregate.input");
const director_min_aggregate_input_1 = require("./director-min-aggregate.input");
const director_max_aggregate_input_1 = require("./director-max-aggregate.input");
let DirectorAggregateArgs = class DirectorAggregateArgs {
};
exports.DirectorAggregateArgs = DirectorAggregateArgs;
__decorate([
    (0, graphql_1.Field)(() => director_where_input_1.DirectorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_where_input_1.DirectorWhereInput),
    __metadata("design:type", director_where_input_1.DirectorWhereInput)
], DirectorAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [director_order_by_with_relation_input_1.DirectorOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], DirectorAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_where_unique_input_1.DirectorWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], DirectorAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DirectorAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DirectorAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_count_aggregate_input_1.DirectorCountAggregateInput, { nullable: true }),
    __metadata("design:type", director_count_aggregate_input_1.DirectorCountAggregateInput)
], DirectorAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_avg_aggregate_input_1.DirectorAvgAggregateInput, { nullable: true }),
    __metadata("design:type", director_avg_aggregate_input_1.DirectorAvgAggregateInput)
], DirectorAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_sum_aggregate_input_1.DirectorSumAggregateInput, { nullable: true }),
    __metadata("design:type", director_sum_aggregate_input_1.DirectorSumAggregateInput)
], DirectorAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_min_aggregate_input_1.DirectorMinAggregateInput, { nullable: true }),
    __metadata("design:type", director_min_aggregate_input_1.DirectorMinAggregateInput)
], DirectorAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_max_aggregate_input_1.DirectorMaxAggregateInput, { nullable: true }),
    __metadata("design:type", director_max_aggregate_input_1.DirectorMaxAggregateInput)
], DirectorAggregateArgs.prototype, "_max", void 0);
exports.DirectorAggregateArgs = DirectorAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DirectorAggregateArgs);
//# sourceMappingURL=director-aggregate.args.js.map