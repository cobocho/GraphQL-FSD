import { CutUncheckedCreateNestedManyWithoutFilmInput } from '../cut/cut-unchecked-create-nested-many-without-film.input';
export declare class FilmUncheckedCreateWithoutDirectorInput {
    id?: number;
    title: string;
    subtitle?: string;
    genre: string;
    description: string;
    runningTime: number;
    posterImg: string;
    release: string;
    Cut?: CutUncheckedCreateNestedManyWithoutFilmInput;
}
