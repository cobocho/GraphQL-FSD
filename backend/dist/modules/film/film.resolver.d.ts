import { FilmService } from './film.service';
import { Film } from './entities/film.entity';
import { DirectorService } from '../director/director.service';
export declare class FilmResolver {
    private readonly filmService;
    private readonly directorService;
    constructor(filmService: FilmService, directorService: DirectorService);
    films(cursor: number, limit: number): {
        films: any[];
        cursor?: undefined;
    } | {
        films: Film[];
        cursor: number;
    };
    director(film: Film): import("../../data/ghibli").Director;
}
