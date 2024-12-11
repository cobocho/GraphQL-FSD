import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateNestedManyWithoutDirectorInput } from '../film/film-create-nested-many-without-director.input';

@InputType()
export class DirectorCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => FilmCreateNestedManyWithoutDirectorInput, {nullable:true})
    films?: FilmCreateNestedManyWithoutDirectorInput;
}
