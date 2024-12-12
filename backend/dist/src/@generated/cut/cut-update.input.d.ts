import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FilmUpdateOneRequiredWithoutCutNestedInput } from '../film/film-update-one-required-without-cut-nested.input';
export declare class CutUpdateInput {
    src?: StringFieldUpdateOperationsInput;
    film?: FilmUpdateOneRequiredWithoutCutNestedInput;
}
