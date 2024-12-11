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
exports.FilmGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const film_count_aggregate_output_1 = require("./film-count-aggregate.output");
const film_avg_aggregate_output_1 = require("./film-avg-aggregate.output");
const film_sum_aggregate_output_1 = require("./film-sum-aggregate.output");
const film_min_aggregate_output_1 = require("./film-min-aggregate.output");
const film_max_aggregate_output_1 = require("./film-max-aggregate.output");
let FilmGroupBy = class FilmGroupBy {
};
exports.FilmGroupBy = FilmGroupBy;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], FilmGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmGroupBy.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FilmGroupBy.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmGroupBy.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], FilmGroupBy.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], FilmGroupBy.prototype, "director_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmGroupBy.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FilmGroupBy.prototype, "release", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_count_aggregate_output_1.FilmCountAggregate, { nullable: true }),
    __metadata("design:type", film_count_aggregate_output_1.FilmCountAggregate)
], FilmGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_avg_aggregate_output_1.FilmAvgAggregate, { nullable: true }),
    __metadata("design:type", film_avg_aggregate_output_1.FilmAvgAggregate)
], FilmGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_sum_aggregate_output_1.FilmSumAggregate, { nullable: true }),
    __metadata("design:type", film_sum_aggregate_output_1.FilmSumAggregate)
], FilmGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_min_aggregate_output_1.FilmMinAggregate, { nullable: true }),
    __metadata("design:type", film_min_aggregate_output_1.FilmMinAggregate)
], FilmGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_max_aggregate_output_1.FilmMaxAggregate, { nullable: true }),
    __metadata("design:type", film_max_aggregate_output_1.FilmMaxAggregate)
], FilmGroupBy.prototype, "_max", void 0);
exports.FilmGroupBy = FilmGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], FilmGroupBy);
//# sourceMappingURL=film-group-by.output.js.map