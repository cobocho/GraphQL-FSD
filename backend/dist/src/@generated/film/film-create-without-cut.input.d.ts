import { DirectorCreateNestedOneWithoutFilmsInput } from '../director/director-create-nested-one-without-films.input';
export declare class FilmCreateWithoutCutInput {
    title: string;
    subtitle?: string;
    genre: string;
    description: string;
    runningTime: number;
    posterImg: string;
    release: string;
    director: DirectorCreateNestedOneWithoutFilmsInput;
}
