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
exports.DirectorUpdateToOneWithWhereWithoutFilmsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const director_where_input_1 = require("./director-where.input");
const class_transformer_1 = require("class-transformer");
const director_update_without_films_input_1 = require("./director-update-without-films.input");
let DirectorUpdateToOneWithWhereWithoutFilmsInput = class DirectorUpdateToOneWithWhereWithoutFilmsInput {
};
exports.DirectorUpdateToOneWithWhereWithoutFilmsInput = DirectorUpdateToOneWithWhereWithoutFilmsInput;
__decorate([
    (0, graphql_1.Field)(() => director_where_input_1.DirectorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => director_where_input_1.DirectorWhereInput),
    __metadata("design:type", director_where_input_1.DirectorWhereInput)
], DirectorUpdateToOneWithWhereWithoutFilmsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => director_update_without_films_input_1.DirectorUpdateWithoutFilmsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => director_update_without_films_input_1.DirectorUpdateWithoutFilmsInput),
    __metadata("design:type", director_update_without_films_input_1.DirectorUpdateWithoutFilmsInput)
], DirectorUpdateToOneWithWhereWithoutFilmsInput.prototype, "data", void 0);
exports.DirectorUpdateToOneWithWhereWithoutFilmsInput = DirectorUpdateToOneWithWhereWithoutFilmsInput = __decorate([
    (0, graphql_2.InputType)()
], DirectorUpdateToOneWithWhereWithoutFilmsInput);
//# sourceMappingURL=director-update-to-one-with-where-without-films.input.js.map