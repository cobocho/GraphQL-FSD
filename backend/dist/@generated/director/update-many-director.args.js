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
exports.UpdateManyDirectorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const director_update_many_mutation_input_1 = require("./director-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const director_where_input_1 = require("./director-where.input");
let UpdateManyDirectorArgs = class UpdateManyDirectorArgs {
};
exports.UpdateManyDirectorArgs = UpdateManyDirectorArgs;
__decorate([
    (0, graphql_1.Field)(() => director_update_many_mutation_input_1.DirectorUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => director_update_many_mutation_input_1.DirectorUpdateManyMutationInput),
    __metadata("design:type", director_update_many_mutation_input_1.DirectorUpdateManyMutationInput)
], UpdateManyDirectorArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_where_input_1.DirectorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_where_input_1.DirectorWhereInput),
    __metadata("design:type", director_where_input_1.DirectorWhereInput)
], UpdateManyDirectorArgs.prototype, "where", void 0);
exports.UpdateManyDirectorArgs = UpdateManyDirectorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyDirectorArgs);
//# sourceMappingURL=update-many-director.args.js.map