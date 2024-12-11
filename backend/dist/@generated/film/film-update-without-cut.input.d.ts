import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DirectorUpdateOneRequiredWithoutFilmsNestedInput } from '../director/director-update-one-required-without-films-nested.input';
export declare class FilmUpdateWithoutCutInput {
    title?: StringFieldUpdateOperationsInput;
    subtitle?: NullableStringFieldUpdateOperationsInput;
    genre?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    runningTime?: IntFieldUpdateOperationsInput;
    posterImg?: StringFieldUpdateOperationsInput;
    release?: StringFieldUpdateOperationsInput;
    director?: DirectorUpdateOneRequiredWithoutFilmsNestedInput;
}
