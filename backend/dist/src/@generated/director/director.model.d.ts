import { Film } from '../film/film.model';
import { DirectorCount } from './director-count.output';
export declare class Director {
    id: number;
    name: string;
    films?: Array<Film>;
    _count?: DirectorCount;
}
