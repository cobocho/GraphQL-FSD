import { FilmCreateWithoutCutInput } from './film-create-without-cut.input';
import { FilmCreateOrConnectWithoutCutInput } from './film-create-or-connect-without-cut.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
export declare class FilmCreateNestedOneWithoutCutInput {
    create?: FilmCreateWithoutCutInput;
    connectOrCreate?: FilmCreateOrConnectWithoutCutInput;
    connect?: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
}
