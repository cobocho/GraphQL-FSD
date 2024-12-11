import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FilmUpdateOneRequiredWithoutCutNestedInput } from '../film/film-update-one-required-without-cut-nested.input';

@InputType()
export class CutUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    src?: StringFieldUpdateOperationsInput;

    @Field(() => FilmUpdateOneRequiredWithoutCutNestedInput, {nullable:true})
    film?: FilmUpdateOneRequiredWithoutCutNestedInput;
}
