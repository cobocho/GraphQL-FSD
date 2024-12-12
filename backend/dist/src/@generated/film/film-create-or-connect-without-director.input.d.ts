import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateWithoutDirectorInput } from './film-create-without-director.input';
export declare class FilmCreateOrConnectWithoutDirectorInput {
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    create: FilmCreateWithoutDirectorInput;
}
