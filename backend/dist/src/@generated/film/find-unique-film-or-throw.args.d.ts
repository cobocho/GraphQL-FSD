import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
export declare class FindUniqueFilmOrThrowArgs {
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
}
