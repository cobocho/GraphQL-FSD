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
exports.FilmUncheckedCreateNestedManyWithoutDirectorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const film_create_without_director_input_1 = require("./film-create-without-director.input");
const class_transformer_1 = require("class-transformer");
const film_create_or_connect_without_director_input_1 = require("./film-create-or-connect-without-director.input");
const film_create_many_director_input_envelope_input_1 = require("./film-create-many-director-input-envelope.input");
const film_where_unique_input_1 = require("./film-where-unique.input");
let FilmUncheckedCreateNestedManyWithoutDirectorInput = class FilmUncheckedCreateNestedManyWithoutDirectorInput {
};
exports.FilmUncheckedCreateNestedManyWithoutDirectorInput = FilmUncheckedCreateNestedManyWithoutDirectorInput;
__decorate([
    (0, graphql_1.Field)(() => [film_create_without_director_input_1.FilmCreateWithoutDirectorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => film_create_without_director_input_1.FilmCreateWithoutDirectorInput),
    __metadata("design:type", Array)
], FilmUncheckedCreateNestedManyWithoutDirectorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_create_or_connect_without_director_input_1.FilmCreateOrConnectWithoutDirectorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => film_create_or_connect_without_director_input_1.FilmCreateOrConnectWithoutDirectorInput),
    __metadata("design:type", Array)
], FilmUncheckedCreateNestedManyWithoutDirectorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_create_many_director_input_envelope_input_1.FilmCreateManyDirectorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => film_create_many_director_input_envelope_input_1.FilmCreateManyDirectorInputEnvelope),
    __metadata("design:type", film_create_many_director_input_envelope_input_1.FilmCreateManyDirectorInputEnvelope)
], FilmUncheckedCreateNestedManyWithoutDirectorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [film_where_unique_input_1.FilmWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => film_where_unique_input_1.FilmWhereUniqueInput),
    __metadata("design:type", Array)
], FilmUncheckedCreateNestedManyWithoutDirectorInput.prototype, "connect", void 0);
exports.FilmUncheckedCreateNestedManyWithoutDirectorInput = FilmUncheckedCreateNestedManyWithoutDirectorInput = __decorate([
    (0, graphql_2.InputType)()
], FilmUncheckedCreateNestedManyWithoutDirectorInput);
//# sourceMappingURL=film-unchecked-create-nested-many-without-director.input.js.map