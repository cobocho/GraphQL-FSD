import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmUpdateWithoutCutInput } from './film-update-without-cut.input';
import { Type } from 'class-transformer';
import { FilmCreateWithoutCutInput } from './film-create-without-cut.input';
import { FilmWhereInput } from './film-where.input';

@InputType()
export class FilmUpsertWithoutCutInput {

    @Field(() => FilmUpdateWithoutCutInput, {nullable:false})
    @Type(() => FilmUpdateWithoutCutInput)
    update!: FilmUpdateWithoutCutInput;

    @Field(() => FilmCreateWithoutCutInput, {nullable:false})
    @Type(() => FilmCreateWithoutCutInput)
    create!: FilmCreateWithoutCutInput;

    @Field(() => FilmWhereInput, {nullable:true})
    @Type(() => FilmWhereInput)
    where?: FilmWhereInput;
}
