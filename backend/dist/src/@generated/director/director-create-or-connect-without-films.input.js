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
exports.DirectorCreateOrConnectWithoutFilmsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const director_where_unique_input_1 = require("./director-where-unique.input");
const class_transformer_1 = require("class-transformer");
const director_create_without_films_input_1 = require("./director-create-without-films.input");
let DirectorCreateOrConnectWithoutFilmsInput = class DirectorCreateOrConnectWithoutFilmsInput {
};
exports.DirectorCreateOrConnectWithoutFilmsInput = DirectorCreateOrConnectWithoutFilmsInput;
__decorate([
    (0, graphql_1.Field)(() => director_where_unique_input_1.DirectorWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => director_where_unique_input_1.DirectorWhereUniqueInput),
    __metadata("design:type", Object)
], DirectorCreateOrConnectWithoutFilmsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_create_without_films_input_1.DirectorCreateWithoutFilmsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => director_create_without_films_input_1.DirectorCreateWithoutFilmsInput),
    __metadata("design:type", director_create_without_films_input_1.DirectorCreateWithoutFilmsInput)
], DirectorCreateOrConnectWithoutFilmsInput.prototype, "create", void 0);
exports.DirectorCreateOrConnectWithoutFilmsInput = DirectorCreateOrConnectWithoutFilmsInput = __decorate([
    (0, graphql_2.InputType)()
], DirectorCreateOrConnectWithoutFilmsInput);
//# sourceMappingURL=director-create-or-connect-without-films.input.js.map