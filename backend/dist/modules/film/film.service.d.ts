import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getFilms(limit: number, cursor: number): Promise<{
        films: any[];
        cursor?: undefined;
    } | {
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
    getFilmById(id: number): import("../../@generated/film/film.model").Film;
}
