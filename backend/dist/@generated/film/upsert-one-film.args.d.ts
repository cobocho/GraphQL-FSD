import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateInput } from './film-create.input';
import { FilmUpdateInput } from './film-update.input';
export declare class UpsertOneFilmArgs {
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    create: FilmCreateInput;
    update: FilmUpdateInput;
}
