import { CutCreateWithoutFilmInput } from './cut-create-without-film.input';
import { CutCreateOrConnectWithoutFilmInput } from './cut-create-or-connect-without-film.input';
import { CutCreateManyFilmInputEnvelope } from './cut-create-many-film-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
export declare class CutUncheckedCreateNestedManyWithoutFilmInput {
    create?: Array<CutCreateWithoutFilmInput>;
    connectOrCreate?: Array<CutCreateOrConnectWithoutFilmInput>;
    createMany?: CutCreateManyFilmInputEnvelope;
    connect?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;
}
