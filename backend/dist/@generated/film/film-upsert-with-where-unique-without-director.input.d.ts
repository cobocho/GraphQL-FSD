import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithoutDirectorInput } from './film-update-without-director.input';
import { FilmCreateWithoutDirectorInput } from './film-create-without-director.input';
export declare class FilmUpsertWithWhereUniqueWithoutDirectorInput {
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    update: FilmUpdateWithoutDirectorInput;
    create: FilmCreateWithoutDirectorInput;
}
