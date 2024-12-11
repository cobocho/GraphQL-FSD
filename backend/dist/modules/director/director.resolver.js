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
exports.DirectorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const director_service_1 = require("./director.service");
const director_model_1 = require("../../@generated/director/director.model");
let DirectorResolver = class DirectorResolver {
    constructor(directorService) {
        this.directorService = directorService;
    }
};
exports.DirectorResolver = DirectorResolver;
exports.DirectorResolver = DirectorResolver = __decorate([
    (0, graphql_1.Resolver)(() => director_model_1.Director),
    __metadata("design:paramtypes", [director_service_1.DirectorService])
], DirectorResolver);
//# sourceMappingURL=director.resolver.js.map