import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CutUpdateManyWithoutFilmNestedInput } from '../cut/cut-update-many-without-film-nested.input';
export declare class FilmUpdateWithoutDirectorInput {
    title?: StringFieldUpdateOperationsInput;
    subtitle?: NullableStringFieldUpdateOperationsInput;
    genre?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    runningTime?: IntFieldUpdateOperationsInput;
    posterImg?: StringFieldUpdateOperationsInput;
    release?: StringFieldUpdateOperationsInput;
    Cut?: CutUpdateManyWithoutFilmNestedInput;
}
