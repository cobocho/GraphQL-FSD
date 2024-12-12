import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutUpdateWithoutFilmInput } from './cut-update-without-film.input';
export declare class CutUpdateWithWhereUniqueWithoutFilmInput {
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
    data: CutUpdateWithoutFilmInput;
}
