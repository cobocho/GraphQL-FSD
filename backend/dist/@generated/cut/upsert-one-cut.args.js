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
exports.UpsertOneCutArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const cut_where_unique_input_1 = require("./cut-where-unique.input");
const class_transformer_1 = require("class-transformer");
const cut_create_input_1 = require("./cut-create.input");
const cut_update_input_1 = require("./cut-update.input");
let UpsertOneCutArgs = class UpsertOneCutArgs {
};
exports.UpsertOneCutArgs = UpsertOneCutArgs;
__decorate([
    (0, graphql_1.Field)(() => cut_where_unique_input_1.CutWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => cut_where_unique_input_1.CutWhereUniqueInput),
    __metadata("design:type", Object)
], UpsertOneCutArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_create_input_1.CutCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => cut_create_input_1.CutCreateInput),
    __metadata("design:type", cut_create_input_1.CutCreateInput)
], UpsertOneCutArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => cut_update_input_1.CutUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => cut_update_input_1.CutUpdateInput),
    __metadata("design:type", cut_update_input_1.CutUpdateInput)
], UpsertOneCutArgs.prototype, "update", void 0);
exports.UpsertOneCutArgs = UpsertOneCutArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneCutArgs);
//# sourceMappingURL=upsert-one-cut.args.js.map