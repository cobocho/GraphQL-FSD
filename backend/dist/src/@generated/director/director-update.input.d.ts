import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FilmUpdateManyWithoutDirectorNestedInput } from '../film/film-update-many-without-director-nested.input';
export declare class DirectorUpdateInput {
    name?: StringFieldUpdateOperationsInput;
    films?: FilmUpdateManyWithoutDirectorNestedInput;
}
