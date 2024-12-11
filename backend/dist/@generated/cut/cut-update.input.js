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
exports.CutUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const film_update_one_required_without_cut_nested_input_1 = require("../film/film-update-one-required-without-cut-nested.input");
let CutUpdateInput = class CutUpdateInput {
};
exports.CutUpdateInput = CutUpdateInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CutUpdateInput.prototype, "src", void 0);
__decorate([
    (0, graphql_1.Field)(() => film_update_one_required_without_cut_nested_input_1.FilmUpdateOneRequiredWithoutCutNestedInput, { nullable: true }),
    __metadata("design:type", film_update_one_required_without_cut_nested_input_1.FilmUpdateOneRequiredWithoutCutNestedInput)
], CutUpdateInput.prototype, "film", void 0);
exports.CutUpdateInput = CutUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], CutUpdateInput);
//# sourceMappingURL=cut-update.input.js.map