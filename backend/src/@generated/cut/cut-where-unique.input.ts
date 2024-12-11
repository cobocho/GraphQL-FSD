import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CutWhereInput } from './cut-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FilmScalarRelationFilter } from '../prisma/film-scalar-relation-filter.input';

@InputType()
export class CutWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CutWhereInput], {nullable:true})
    AND?: Array<CutWhereInput>;

    @Field(() => [CutWhereInput], {nullable:true})
    OR?: Array<CutWhereInput>;

    @Field(() => [CutWhereInput], {nullable:true})
    NOT?: Array<CutWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    src?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    filmId?: IntFilter;

    @Field(() => FilmScalarRelationFilter, {nullable:true})
    film?: FilmScalarRelationFilter;
}
