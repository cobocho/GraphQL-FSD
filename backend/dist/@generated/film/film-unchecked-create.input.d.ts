import { CutUncheckedCreateNestedManyWithoutFilmInput } from '../cut/cut-unchecked-create-nested-many-without-film.input';
export declare class FilmUncheckedCreateInput {
    id?: number;
    title: string;
    subtitle?: string;
    genre: string;
    description: string;
    runningTime: number;
    director_id: number;
    posterImg: string;
    release: string;
    Cut?: CutUncheckedCreateNestedManyWithoutFilmInput;
}
