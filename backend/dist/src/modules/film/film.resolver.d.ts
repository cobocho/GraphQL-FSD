import { FilmService } from './film.service';
import { DirectorService } from '../director/director.service';
import { Film } from 'src/@generated/film/film.model';
export declare class FilmResolver {
    private readonly filmService;
    private readonly directorService;
    constructor(filmService: FilmService, directorService: DirectorService);
    films(cursor: number, limit: number): Promise<{
        films: {
            id: number;
            title: string;
            subtitle: string | null;
            genre: string;
            description: string;
            runningTime: number;
            director_id: number;
            posterImg: string;
            release: string;
        }[];
        cursor: number;
    }>;
    film(id: number): Promise<{
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
    director(film: Film): Promise<{
        id: number;
        name: string;
    }>;
}
