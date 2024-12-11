import { CutService } from './cut.service';
import { FilmService } from 'src/modules/film/film.service';
import { Cut } from 'src/@generated/cut/cut.model';
import { Film } from 'src/@generated/film/film.model';
export declare class CutResolver {
    private readonly cutService;
    private readonly filmService;
    constructor(cutService: CutService, filmService: FilmService);
    cuts(filmId: number): Cut[];
    film(cut: Cut): Film;
}
