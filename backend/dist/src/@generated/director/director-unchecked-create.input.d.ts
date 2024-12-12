import { FilmUncheckedCreateNestedManyWithoutDirectorInput } from '../film/film-unchecked-create-nested-many-without-director.input';
export declare class DirectorUncheckedCreateInput {
    id?: number;
    name: string;
    films?: FilmUncheckedCreateNestedManyWithoutDirectorInput;
}
