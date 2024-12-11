import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutCreateWithoutFilmInput } from './cut-create-without-film.input';
export declare class CutCreateOrConnectWithoutFilmInput {
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
    create: CutCreateWithoutFilmInput;
}
