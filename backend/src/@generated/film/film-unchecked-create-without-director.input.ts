import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CutUncheckedCreateNestedManyWithoutFilmInput } from '../cut/cut-unchecked-create-nested-many-without-film.input';

@InputType()
export class FilmUncheckedCreateWithoutDirectorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CutUncheckedCreateNestedManyWithoutFilmInput, {nullable:true})
    Cut?: CutUncheckedCreateNestedManyWithoutFilmInput;
}
