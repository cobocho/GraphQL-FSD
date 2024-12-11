import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FilmUncheckedUpdateManyWithoutDirectorNestedInput } from '../film/film-unchecked-update-many-without-director-nested.input';

@InputType()
export class DirectorUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FilmUncheckedUpdateManyWithoutDirectorNestedInput, {nullable:true})
    films?: FilmUncheckedUpdateManyWithoutDirectorNestedInput;
}
