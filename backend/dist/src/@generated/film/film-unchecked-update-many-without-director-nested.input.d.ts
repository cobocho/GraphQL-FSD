import { FilmCreateWithoutDirectorInput } from './film-create-without-director.input';
import { FilmCreateOrConnectWithoutDirectorInput } from './film-create-or-connect-without-director.input';
import { FilmUpsertWithWhereUniqueWithoutDirectorInput } from './film-upsert-with-where-unique-without-director.input';
import { FilmCreateManyDirectorInputEnvelope } from './film-create-many-director-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithWhereUniqueWithoutDirectorInput } from './film-update-with-where-unique-without-director.input';
import { FilmUpdateManyWithWhereWithoutDirectorInput } from './film-update-many-with-where-without-director.input';
import { FilmScalarWhereInput } from './film-scalar-where.input';
export declare class FilmUncheckedUpdateManyWithoutDirectorNestedInput {
    create?: Array<FilmCreateWithoutDirectorInput>;
    connectOrCreate?: Array<FilmCreateOrConnectWithoutDirectorInput>;
    upsert?: Array<FilmUpsertWithWhereUniqueWithoutDirectorInput>;
    createMany?: FilmCreateManyDirectorInputEnvelope;
    set?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;
    update?: Array<FilmUpdateWithWhereUniqueWithoutDirectorInput>;
    updateMany?: Array<FilmUpdateManyWithWhereWithoutDirectorInput>;
    deleteMany?: Array<FilmScalarWhereInput>;
}
