import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmWhereInput } from './film-where.input';
import { Type } from 'class-transformer';
import { FilmOrderByWithRelationInput } from './film-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FilmScalarFieldEnum } from './film-scalar-field.enum';

@ArgsType()
export class FindFirstFilmOrThrowArgs {

    @Field(() => FilmWhereInput, {nullable:true})
    @Type(() => FilmWhereInput)
    where?: FilmWhereInput;

    @Field(() => [FilmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FilmOrderByWithRelationInput>;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FilmScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FilmScalarFieldEnum>;
}
