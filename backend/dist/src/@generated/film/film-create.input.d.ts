import { DirectorCreateNestedOneWithoutFilmsInput } from '../director/director-create-nested-one-without-films.input';
import { CutCreateNestedManyWithoutFilmInput } from '../cut/cut-create-nested-many-without-film.input';
export declare class FilmCreateInput {
    title: string;
    subtitle?: string;
    genre: string;
    description: string;
    runningTime: number;
    posterImg: string;
    release: string;
    director: DirectorCreateNestedOneWithoutFilmsInput;
    Cut?: CutCreateNestedManyWithoutFilmInput;
}
