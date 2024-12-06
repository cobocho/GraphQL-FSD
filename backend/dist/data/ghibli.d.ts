import { Film } from 'src/modules/film/entities/film.entity';
interface Cut {
    id: number;
    filmId: number;
    src: string;
}
export interface Director {
    id: number;
    name: string;
}
export interface GhibliData {
    films: Film[];
    directors: Director[];
    cuts: Cut[];
}
declare const ghibliData: GhibliData;
export default ghibliData;
