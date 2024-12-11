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
exports.DeleteManyDirectorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const director_where_input_1 = require("./director-where.input");
const class_transformer_1 = require("class-transformer");
let DeleteManyDirectorArgs = class DeleteManyDirectorArgs {
};
exports.DeleteManyDirectorArgs = DeleteManyDirectorArgs;
__decorate([
    (0, graphql_1.Field)(() => director_where_input_1.DirectorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_where_input_1.DirectorWhereInput),
    __metadata("design:type", director_where_input_1.DirectorWhereInput)
], DeleteManyDirectorArgs.prototype, "where", void 0);
exports.DeleteManyDirectorArgs = DeleteManyDirectorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManyDirectorArgs);
//# sourceMappingURL=delete-many-director.args.js.map