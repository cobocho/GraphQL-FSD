import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FilmUpdateManyWithoutDirectorNestedInput } from '../film/film-update-many-without-director-nested.input';

@InputType()
export class DirectorUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FilmUpdateManyWithoutDirectorNestedInput, {nullable:true})
    films?: FilmUpdateManyWithoutDirectorNestedInput;
}
