import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithoutDirectorInput } from './film-update-without-director.input';
export declare class FilmUpdateWithWhereUniqueWithoutDirectorInput {
    where: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    data: FilmUpdateWithoutDirectorInput;
}
