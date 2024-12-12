import { FilmCreateWithoutDirectorInput } from './film-create-without-director.input';
import { FilmCreateOrConnectWithoutDirectorInput } from './film-create-or-connect-without-director.input';
import { FilmCreateManyDirectorInputEnvelope } from './film-create-many-director-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
export declare class FilmUncheckedCreateNestedManyWithoutDirectorInput {
    create?: Array<FilmCreateWithoutDirectorInput>;
    connectOrCreate?: Array<FilmCreateOrConnectWithoutDirectorInput>;
    createMany?: FilmCreateManyDirectorInputEnvelope;
    connect?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;
}
