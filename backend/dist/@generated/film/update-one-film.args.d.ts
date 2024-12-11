import { FilmUpdateInput } from './film-update.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
export declare class UpdateOneFilmArgs {
    data: FilmUpdateInput;
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
}
