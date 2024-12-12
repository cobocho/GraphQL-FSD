import { Film } from '../film/film.model';
export declare class Cut {
    id: number;
    src: string;
    filmId: number;
    film?: Film;
}
