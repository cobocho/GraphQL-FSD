import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CutCreateNestedManyWithoutFilmInput } from '../cut/cut-create-nested-many-without-film.input';

@InputType()
export class FilmCreateWithoutDirectorInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:false})
    genre!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    runningTime!: number;

    @Field(() => String, {nullable:false})
    posterImg!: string;

    @Field(() => String, {nullable:false})
    release!: string;

    @Field(() => CutCreateNestedManyWithoutFilmInput, {nullable:true})
    Cut?: CutCreateNestedManyWithoutFilmInput;
}
