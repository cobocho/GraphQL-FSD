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
exports.CutOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const film_order_by_with_relation_input_1 = require("../film/film-order-by-with-relation.input");
let CutOrderByWithRelationInput = class CutOrderByWithRelationInput {
};
exports.CutOrderByWithRelationInput = CutOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CutOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CutOrderByWithRelationInput.prototype, "src", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CutOrderByWithRelationInput.prototype, "filmId", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_order_by_with_relation_input_1.FilmOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", film_order_by_with_relation_input_1.FilmOrderByWithRelationInput)
], CutOrderByWithRelationInput.prototype, "film", void 0);
exports.CutOrderByWithRelationInput = CutOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], CutOrderByWithRelationInput);
//# sourceMappingURL=cut-order-by-with-relation.input.js.map