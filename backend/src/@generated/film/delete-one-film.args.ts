import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFilmArgs {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    @Type(() => FilmWhereUniqueInput)
    where!: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
}
