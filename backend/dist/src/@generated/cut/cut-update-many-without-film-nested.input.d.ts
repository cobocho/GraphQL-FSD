import { CutCreateWithoutFilmInput } from './cut-create-without-film.input';
import { CutCreateOrConnectWithoutFilmInput } from './cut-create-or-connect-without-film.input';
import { CutUpsertWithWhereUniqueWithoutFilmInput } from './cut-upsert-with-where-unique-without-film.input';
import { CutCreateManyFilmInputEnvelope } from './cut-create-many-film-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutUpdateWithWhereUniqueWithoutFilmInput } from './cut-update-with-where-unique-without-film.input';
import { CutUpdateManyWithWhereWithoutFilmInput } from './cut-update-many-with-where-without-film.input';
import { CutScalarWhereInput } from './cut-scalar-where.input';
export declare class CutUpdateManyWithoutFilmNestedInput {
    create?: Array<CutCreateWithoutFilmInput>;
    connectOrCreate?: Array<CutCreateOrConnectWithoutFilmInput>;
    upsert?: Array<CutUpsertWithWhereUniqueWithoutFilmInput>;
    createMany?: CutCreateManyFilmInputEnvelope;
    set?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;
    update?: Array<CutUpdateWithWhereUniqueWithoutFilmInput>;
    updateMany?: Array<CutUpdateManyWithWhereWithoutFilmInput>;
    deleteMany?: Array<CutScalarWhereInput>;
}
