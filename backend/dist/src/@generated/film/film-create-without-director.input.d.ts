import { CutCreateNestedManyWithoutFilmInput } from '../cut/cut-create-nested-many-without-film.input';
export declare class FilmCreateWithoutDirectorInput {
    title: string;
    subtitle?: string;
    genre: string;
    description: string;
    runningTime: number;
    posterImg: string;
    release: string;
    Cut?: CutCreateNestedManyWithoutFilmInput;
}
