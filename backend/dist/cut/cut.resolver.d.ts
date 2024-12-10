import { CutService } from './cut.service';
import { Cut } from './entities/cut.entity';
import { Film } from 'src/modules/film/entities/film.entity';
import { FilmService } from 'src/modules/film/film.service';
export declare class CutResolver {
    private readonly cutService;
    private readonly filmService;
    constructor(cutService: CutService, filmService: FilmService);
    cuts(filmId: number): Cut[];
    film(cut: Cut): Film;
}
