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
exports.AggregateFilm = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_count_aggregate_output_1 = require("./film-count-aggregate.output");
const film_avg_aggregate_output_1 = require("./film-avg-aggregate.output");
const film_sum_aggregate_output_1 = require("./film-sum-aggregate.output");
const film_min_aggregate_output_1 = require("./film-min-aggregate.output");
const film_max_aggregate_output_1 = require("./film-max-aggregate.output");
let AggregateFilm = class AggregateFilm {
};
exports.AggregateFilm = AggregateFilm;
__decorate([
    (0, graphql_1.Field)(() => film_count_aggregate_output_1.FilmCountAggregate, { nullable: true }),
    __metadata("design:type", film_count_aggregate_output_1.FilmCountAggregate)
], AggregateFilm.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_avg_aggregate_output_1.FilmAvgAggregate, { nullable: true }),
    __metadata("design:type", film_avg_aggregate_output_1.FilmAvgAggregate)
], AggregateFilm.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_sum_aggregate_output_1.FilmSumAggregate, { nullable: true }),
    __metadata("design:type", film_sum_aggregate_output_1.FilmSumAggregate)
], AggregateFilm.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_min_aggregate_output_1.FilmMinAggregate, { nullable: true }),
    __metadata("design:type", film_min_aggregate_output_1.FilmMinAggregate)
], AggregateFilm.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_max_aggregate_output_1.FilmMaxAggregate, { nullable: true }),
    __metadata("design:type", film_max_aggregate_output_1.FilmMaxAggregate)
], AggregateFilm.prototype, "_max", void 0);
exports.AggregateFilm = AggregateFilm = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateFilm);
//# sourceMappingURL=aggregate-film.output.js.map