import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereInput } from './film-where.input';
import { Type } from 'class-transformer';
import { FilmUpdateWithoutCutInput } from './film-update-without-cut.input';

@InputType()
export class FilmUpdateToOneWithWhereWithoutCutInput {

    @Field(() => FilmWhereInput, {nullable:true})
    @Type(() => FilmWhereInput)
    where?: FilmWhereInput;

    @Field(() => FilmUpdateWithoutCutInput, {nullable:false})
    @Type(() => FilmUpdateWithoutCutInput)
    data!: FilmUpdateWithoutCutInput;
}
