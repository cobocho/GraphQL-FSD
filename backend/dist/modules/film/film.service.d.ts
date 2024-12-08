export declare class FilmService {
    getFilms(limit: number, cursor: number): {
        films: any[];
        cursor?: undefined;
    } | {
        films: import("./entities/film.entity").Film[];
        cursor: number;
    };
}
