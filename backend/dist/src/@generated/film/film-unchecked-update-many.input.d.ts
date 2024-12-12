import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
export declare class FilmUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    subtitle?: NullableStringFieldUpdateOperationsInput;
    genre?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    runningTime?: IntFieldUpdateOperationsInput;
    director_id?: IntFieldUpdateOperationsInput;
    posterImg?: StringFieldUpdateOperationsInput;
    release?: StringFieldUpdateOperationsInput;
}
