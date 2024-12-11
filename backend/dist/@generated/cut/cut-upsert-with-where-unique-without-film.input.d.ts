import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutUpdateWithoutFilmInput } from './cut-update-without-film.input';
import { CutCreateWithoutFilmInput } from './cut-create-without-film.input';
export declare class CutUpsertWithWhereUniqueWithoutFilmInput {
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
    update: CutUpdateWithoutFilmInput;
    create: CutCreateWithoutFilmInput;
}
