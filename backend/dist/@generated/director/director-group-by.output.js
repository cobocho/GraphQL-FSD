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
exports.DirectorGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const director_count_aggregate_output_1 = require("./director-count-aggregate.output");
const director_avg_aggregate_output_1 = require("./director-avg-aggregate.output");
const director_sum_aggregate_output_1 = require("./director-sum-aggregate.output");
const director_min_aggregate_output_1 = require("./director-min-aggregate.output");
const director_max_aggregate_output_1 = require("./director-max-aggregate.output");
let DirectorGroupBy = class DirectorGroupBy {
};
exports.DirectorGroupBy = DirectorGroupBy;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], DirectorGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DirectorGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_count_aggregate_output_1.DirectorCountAggregate, { nullable: true }),
    __metadata("design:type", director_count_aggregate_output_1.DirectorCountAggregate)
], DirectorGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_avg_aggregate_output_1.DirectorAvgAggregate, { nullable: true }),
    __metadata("design:type", director_avg_aggregate_output_1.DirectorAvgAggregate)
], DirectorGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_sum_aggregate_output_1.DirectorSumAggregate, { nullable: true }),
    __metadata("design:type", director_sum_aggregate_output_1.DirectorSumAggregate)
], DirectorGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_min_aggregate_output_1.DirectorMinAggregate, { nullable: true }),
    __metadata("design:type", director_min_aggregate_output_1.DirectorMinAggregate)
], DirectorGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_max_aggregate_output_1.DirectorMaxAggregate, { nullable: true }),
    __metadata("design:type", director_max_aggregate_output_1.DirectorMaxAggregate)
], DirectorGroupBy.prototype, "_max", void 0);
exports.DirectorGroupBy = DirectorGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], DirectorGroupBy);
//# sourceMappingURL=director-group-by.output.js.map