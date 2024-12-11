import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FilmUncheckedCreateNestedManyWithoutDirectorInput } from '../film/film-unchecked-create-nested-many-without-director.input';

@InputType()
export class DirectorUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => FilmUncheckedCreateNestedManyWithoutDirectorInput, {nullable:true})
    films?: FilmUncheckedCreateNestedManyWithoutDirectorInput;
}
