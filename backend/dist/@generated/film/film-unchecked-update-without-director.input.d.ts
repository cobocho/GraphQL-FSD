import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CutUncheckedUpdateManyWithoutFilmNestedInput } from '../cut/cut-unchecked-update-many-without-film-nested.input';
export declare class FilmUncheckedUpdateWithoutDirectorInput {
    id?: IntFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    subtitle?: NullableStringFieldUpdateOperationsInput;
    genre?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    runningTime?: IntFieldUpdateOperationsInput;
    posterImg?: StringFieldUpdateOperationsInput;
    release?: StringFieldUpdateOperationsInput;
    Cut?: CutUncheckedUpdateManyWithoutFilmNestedInput;
}
