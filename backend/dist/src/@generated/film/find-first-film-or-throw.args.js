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
exports.FindFirstFilmOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_where_input_1 = require("./film-where.input");
const class_transformer_1 = require("class-transformer");
const film_order_by_with_relation_input_1 = require("./film-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const film_where_unique_input_1 = require("./film-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const film_scalar_field_enum_1 = require("./film-scalar-field.enum");
let FindFirstFilmOrThrowArgs = class FindFirstFilmOrThrowArgs {
};
exports.FindFirstFilmOrThrowArgs = FindFirstFilmOrThrowArgs;
__decorate([
    (0, graphql_1.Field)(() => film_where_input_1.FilmWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_where_input_1.FilmWhereInput),
    __metadata("design:type", film_where_input_1.FilmWhereInput)
], FindFirstFilmOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_order_by_with_relation_input_1.FilmOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstFilmOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_where_unique_input_1.FilmWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstFilmOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstFilmOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstFilmOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_scalar_field_enum_1.FilmScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstFilmOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstFilmOrThrowArgs = FindFirstFilmOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstFilmOrThrowArgs);
//# sourceMappingURL=find-first-film-or-throw.args.js.map