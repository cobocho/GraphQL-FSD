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
exports.DirectorUpdateOneRequiredWithoutFilmsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const director_create_without_films_input_1 = require("./director-create-without-films.input");
const class_transformer_1 = require("class-transformer");
const director_create_or_connect_without_films_input_1 = require("./director-create-or-connect-without-films.input");
const director_upsert_without_films_input_1 = require("./director-upsert-without-films.input");
const client_1 = require("@prisma/client");
const director_where_unique_input_1 = require("./director-where-unique.input");
const director_update_to_one_with_where_without_films_input_1 = require("./director-update-to-one-with-where-without-films.input");
let DirectorUpdateOneRequiredWithoutFilmsNestedInput = class DirectorUpdateOneRequiredWithoutFilmsNestedInput {
};
exports.DirectorUpdateOneRequiredWithoutFilmsNestedInput = DirectorUpdateOneRequiredWithoutFilmsNestedInput;
__decorate([
    (0, graphql_1.Field)(() => director_create_without_films_input_1.DirectorCreateWithoutFilmsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_create_without_films_input_1.DirectorCreateWithoutFilmsInput),
    __metadata("design:type", director_create_without_films_input_1.DirectorCreateWithoutFilmsInput)
], DirectorUpdateOneRequiredWithoutFilmsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_create_or_connect_without_films_input_1.DirectorCreateOrConnectWithoutFilmsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_create_or_connect_without_films_input_1.DirectorCreateOrConnectWithoutFilmsInput),
    __metadata("design:type", director_create_or_connect_without_films_input_1.DirectorCreateOrConnectWithoutFilmsInput)
], DirectorUpdateOneRequiredWithoutFilmsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_upsert_without_films_input_1.DirectorUpsertWithoutFilmsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_upsert_without_films_input_1.DirectorUpsertWithoutFilmsInput),
    __metadata("design:type", director_upsert_without_films_input_1.DirectorUpsertWithoutFilmsInput)
], DirectorUpdateOneRequiredWithoutFilmsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_where_unique_input_1.DirectorWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_where_unique_input_1.DirectorWhereUniqueInput),
    __metadata("design:type", Object)
], DirectorUpdateOneRequiredWithoutFilmsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_update_to_one_with_where_without_films_input_1.DirectorUpdateToOneWithWhereWithoutFilmsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_update_to_one_with_where_without_films_input_1.DirectorUpdateToOneWithWhereWithoutFilmsInput),
    __metadata("design:type", director_update_to_one_with_where_without_films_input_1.DirectorUpdateToOneWithWhereWithoutFilmsInput)
], DirectorUpdateOneRequiredWithoutFilmsNestedInput.prototype, "update", void 0);
exports.DirectorUpdateOneRequiredWithoutFilmsNestedInput = DirectorUpdateOneRequiredWithoutFilmsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DirectorUpdateOneRequiredWithoutFilmsNestedInput);
//# sourceMappingURL=director-update-one-required-without-films-nested.input.js.map