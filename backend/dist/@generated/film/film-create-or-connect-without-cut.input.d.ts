import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateWithoutCutInput } from './film-create-without-cut.input';
export declare class FilmCreateOrConnectWithoutCutInput {
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    create: FilmCreateWithoutCutInput;
}
