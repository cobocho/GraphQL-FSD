import { FilmCreateWithoutCutInput } from './film-create-without-cut.input';
import { FilmCreateOrConnectWithoutCutInput } from './film-create-or-connect-without-cut.input';
import { FilmUpsertWithoutCutInput } from './film-upsert-without-cut.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateToOneWithWhereWithoutCutInput } from './film-update-to-one-with-where-without-cut.input';
export declare class FilmUpdateOneRequiredWithoutCutNestedInput {
    create?: FilmCreateWithoutCutInput;
    connectOrCreate?: FilmCreateOrConnectWithoutCutInput;
    upsert?: FilmUpsertWithoutCutInput;
    connect?: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    update?: FilmUpdateToOneWithWhereWithoutCutInput;
}
