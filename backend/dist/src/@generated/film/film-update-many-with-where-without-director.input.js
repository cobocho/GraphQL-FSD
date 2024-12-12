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
exports.FilmUpdateManyWithWhereWithoutDirectorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_scalar_where_input_1 = require("./film-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const film_update_many_mutation_input_1 = require("./film-update-many-mutation.input");
let FilmUpdateManyWithWhereWithoutDirectorInput = class FilmUpdateManyWithWhereWithoutDirectorInput {
};
exports.FilmUpdateManyWithWhereWithoutDirectorInput = FilmUpdateManyWithWhereWithoutDirectorInput;
__decorate([
    (0, graphql_1.Field)(() => film_scalar_where_input_1.FilmScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => film_scalar_where_input_1.FilmScalarWhereInput),
    __metadata("design:type", film_scalar_where_input_1.FilmScalarWhereInput)
], FilmUpdateManyWithWhereWithoutDirectorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_update_many_mutation_input_1.FilmUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => film_update_many_mutation_input_1.FilmUpdateManyMutationInput),
    __metadata("design:type", film_update_many_mutation_input_1.FilmUpdateManyMutationInput)
], FilmUpdateManyWithWhereWithoutDirectorInput.prototype, "data", void 0);
exports.FilmUpdateManyWithWhereWithoutDirectorInput = FilmUpdateManyWithWhereWithoutDirectorInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUpdateManyWithWhereWithoutDirectorInput);
//# sourceMappingURL=film-update-many-with-where-without-director.input.js.map