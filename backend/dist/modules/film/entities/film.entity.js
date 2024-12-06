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
exports.Film = void 0;
const graphql_1 = require("@nestjs/graphql");
let Film = class Film {
};
exports.Film = Film;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: '영화 고유 ID' }),
    __metadata("design:type", Number)
], Film.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '영화 제목' }),
    __metadata("design:type", String)
], Film.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true, description: '영화 서브 제목' }),
    __metadata("design:type", String)
], Film.prototype, "subtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '영화 장르' }),
    __metadata("design:type", String)
], Film.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '영화 줄거리 및 설명' }),
    __metadata("design:type", String)
], Film.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: '영화 상영 시간' }),
    __metadata("design:type", Number)
], Film.prototype, "runningTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: '영화 제작자 ID' }),
    __metadata("design:type", Number)
], Film.prototype, "director_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '포스터 URL' }),
    __metadata("design:type", String)
], Film.prototype, "posterImg", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '영화 개봉일' }),
    __metadata("design:type", String)
], Film.prototype, "release", void 0);
exports.Film = Film = __decorate([
    (0, graphql_1.ObjectType)()
], Film);
//# sourceMappingURL=film.entity.js.map