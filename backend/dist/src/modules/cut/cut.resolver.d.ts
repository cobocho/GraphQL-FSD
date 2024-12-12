import { CutService } from './cut.service';
import { FilmService } from 'src/modules/film/film.service';
import { Cut } from 'src/@generated/cut/cut.model';
export declare class CutResolver {
    private readonly cutService;
    private readonly filmService;
    constructor(cutService: CutService, filmService: FilmService);
    cuts(filmId: number): Promise<Cut[]>;
    film(cut: Cut): Promise<{
        id: number;
        title: string;
        subtitle: string | null;
        genre: string;
        description: string;
        runningTime: number;
        director_id: number;
        posterImg: string;
        release: string;
    }>;
}
