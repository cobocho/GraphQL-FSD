"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmService = void 0;
const common_1 = require("@nestjs/common");
const ghibli_1 = require("../../data/ghibli");
let FilmService = class FilmService {
    getFilms(limit, cursor) {
        const realLimit = Math.min(limit, 6);
        if (!cursor) {
            return {
                films: [],
            };
        }
        const cursorDataIndex = ghibli_1.default.films.findIndex((film) => film.id === cursor);
        if (cursorDataIndex === -1) {
            return {
                films: [],
            };
        }
        const result = ghibli_1.default.films.slice(cursorDataIndex, cursorDataIndex + realLimit);
        const nextCursor = result[result.length - 1]?.id;
        const hasNext = nextCursor < ghibli_1.default.films.length;
        return {
            films: result,
            cursor: hasNext ? nextCursor + 1 : null,
        };
    }
    getFilmById(id) {
        return ghibli_1.default.films.find((film) => film.id === id);
    }
};
exports.FilmService = FilmService;
exports.FilmService = FilmService = __decorate([
    (0, common_1.Injectable)()
], FilmService);
//# sourceMappingURL=film.service.js.map