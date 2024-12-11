import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { Type } from 'class-transformer';
import { FilmUpdateWithoutDirectorInput } from './film-update-without-director.input';

@InputType()
export class FilmUpdateWithWhereUniqueWithoutDirectorInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    @Type(() => FilmWhereUniqueInput)
    where!: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;

    @Field(() => FilmUpdateWithoutDirectorInput, {nullable:false})
    @Type(() => FilmUpdateWithoutDirectorInput)
    data!: FilmUpdateWithoutDirectorInput;
}
