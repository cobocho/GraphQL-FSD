import { FilmCreateNestedManyWithoutDirectorInput } from '../film/film-create-nested-many-without-director.input';
export declare class DirectorCreateInput {
    name: string;
    films?: FilmCreateNestedManyWithoutDirectorInput;
}
