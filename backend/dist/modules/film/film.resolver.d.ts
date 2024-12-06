import { FilmService } from './film.service';
import { Film } from './entities/film.entity';
export declare class FilmResolver {
    private readonly filmService;
    constructor(filmService: FilmService);
    films(): Film[];
}
