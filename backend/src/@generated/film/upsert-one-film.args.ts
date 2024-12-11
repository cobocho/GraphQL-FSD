import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { Type } from 'class-transformer';
import { FilmCreateInput } from './film-create.input';
import { FilmUpdateInput } from './film-update.input';

@ArgsType()
export class UpsertOneFilmArgs {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    @Type(() => FilmWhereUniqueInput)
    where!: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;

    @Field(() => FilmCreateInput, {nullable:false})
    @Type(() => FilmCreateInput)
    create!: FilmCreateInput;

    @Field(() => FilmUpdateInput, {nullable:false})
    @Type(() => FilmUpdateInput)
    update!: FilmUpdateInput;
}
