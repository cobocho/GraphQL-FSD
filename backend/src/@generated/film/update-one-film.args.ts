import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmUpdateInput } from './film-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@ArgsType()
export class UpdateOneFilmArgs {

    @Field(() => FilmUpdateInput, {nullable:false})
    @Type(() => FilmUpdateInput)
    data!: FilmUpdateInput;

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    @Type(() => FilmWhereUniqueInput)
    where!: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
}
