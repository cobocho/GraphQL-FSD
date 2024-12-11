import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
export declare class DeleteOneFilmArgs {
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
}
