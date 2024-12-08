export declare class Film {
    id: number;
    title: string;
    subtitle?: string;
    genre: string;
    description: string;
    runningTime: number;
    director_id: number;
    posterImg: string;
    release: string;
}
export declare class PaginatedFilms {
    films: Film[];
    cursor: number;
}
