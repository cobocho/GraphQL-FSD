import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateNestedOneWithoutCutInput } from '../film/film-create-nested-one-without-cut.input';

@InputType()
export class CutCreateInput {

    @Field(() => String, {nullable:false})
    src!: string;

    @Field(() => FilmCreateNestedOneWithoutCutInput, {nullable:false})
    film!: FilmCreateNestedOneWithoutCutInput;
}
