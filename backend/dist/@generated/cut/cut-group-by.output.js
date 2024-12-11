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
exports.CutGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const cut_count_aggregate_output_1 = require("./cut-count-aggregate.output");
const cut_avg_aggregate_output_1 = require("./cut-avg-aggregate.output");
const cut_sum_aggregate_output_1 = require("./cut-sum-aggregate.output");
const cut_min_aggregate_output_1 = require("./cut-min-aggregate.output");
const cut_max_aggregate_output_1 = require("./cut-max-aggregate.output");
let CutGroupBy = class CutGroupBy {
};
exports.CutGroupBy = CutGroupBy;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], CutGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CutGroupBy.prototype, "src", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], CutGroupBy.prototype, "filmId", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_count_aggregate_output_1.CutCountAggregate, { nullable: true }),
    __metadata("design:type", cut_count_aggregate_output_1.CutCountAggregate)
], CutGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_avg_aggregate_output_1.CutAvgAggregate, { nullable: true }),
    __metadata("design:type", cut_avg_aggregate_output_1.CutAvgAggregate)
], CutGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_sum_aggregate_output_1.CutSumAggregate, { nullable: true }),
    __metadata("design:type", cut_sum_aggregate_output_1.CutSumAggregate)
], CutGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_min_aggregate_output_1.CutMinAggregate, { nullable: true }),
    __metadata("design:type", cut_min_aggregate_output_1.CutMinAggregate)
], CutGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_max_aggregate_output_1.CutMaxAggregate, { nullable: true }),
    __metadata("design:type", cut_max_aggregate_output_1.CutMaxAggregate)
], CutGroupBy.prototype, "_max", void 0);
exports.CutGroupBy = CutGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CutGroupBy);
//# sourceMappingURL=cut-group-by.output.js.map