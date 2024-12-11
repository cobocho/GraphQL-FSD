import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DirectorCreateNestedOneWithoutFilmsInput } from '../director/director-create-nested-one-without-films.input';
import { CutCreateNestedManyWithoutFilmInput } from '../cut/cut-create-nested-many-without-film.input';

@InputType()
export class FilmCreateInput {

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

    @Field(() => DirectorCreateNestedOneWithoutFilmsInput, {nullable:false})
    director!: DirectorCreateNestedOneWithoutFilmsInput;

    @Field(() => CutCreateNestedManyWithoutFilmInput, {nullable:true})
    Cut?: CutCreateNestedManyWithoutFilmInput;
}
