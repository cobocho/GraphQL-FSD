import { Director } from '../director/director.model';
import { Cut } from '../cut/cut.model';
import { FilmCount } from './film-count.output';
export declare class Film {
    id: number;
    title: string;
    subtitle: string | null;
    genre: string;
    description: string;
    runningTime: number;
    director_id: number;
    posterImg: string;
    release: string;
    director?: Director;
    Cut?: Array<Cut>;
    _count?: FilmCount;
}
