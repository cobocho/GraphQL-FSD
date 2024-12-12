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
exports.FindFirstDirectorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const director_where_input_1 = require("./director-where.input");
const class_transformer_1 = require("class-transformer");
const director_order_by_with_relation_input_1 = require("./director-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const director_where_unique_input_1 = require("./director-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const director_scalar_field_enum_1 = require("./director-scalar-field.enum");
let FindFirstDirectorArgs = class FindFirstDirectorArgs {
};
exports.FindFirstDirectorArgs = FindFirstDirectorArgs;
__decorate([
    (0, graphql_1.Field)(() => director_where_input_1.DirectorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_where_input_1.DirectorWhereInput),
    __metadata("design:type", director_where_input_1.DirectorWhereInput)
], FindFirstDirectorArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [director_order_by_with_relation_input_1.DirectorOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstDirectorArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_where_unique_input_1.DirectorWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstDirectorArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstDirectorArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstDirectorArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [director_scalar_field_enum_1.DirectorScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstDirectorArgs.prototype, "distinct", void 0);
exports.FindFirstDirectorArgs = FindFirstDirectorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstDirectorArgs);
//# sourceMappingURL=find-first-director.args.js.map