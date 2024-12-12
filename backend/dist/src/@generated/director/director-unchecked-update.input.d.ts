import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FilmUncheckedUpdateManyWithoutDirectorNestedInput } from '../film/film-unchecked-update-many-without-director-nested.input';
export declare class DirectorUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    films?: FilmUncheckedUpdateManyWithoutDirectorNestedInput;
}
