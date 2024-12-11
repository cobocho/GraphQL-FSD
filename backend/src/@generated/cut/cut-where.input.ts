import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FilmScalarRelationFilter } from '../prisma/film-scalar-relation-filter.input';

@InputType()
export class CutWhereInput {

    @Field(() => [CutWhereInput], {nullable:true})
    AND?: Array<CutWhereInput>;

    @Field(() => [CutWhereInput], {nullable:true})
    OR?: Array<CutWhereInput>;

    @Field(() => [CutWhereInput], {nullable:true})
    NOT?: Array<CutWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    src?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    filmId?: IntFilter;

    @Field(() => FilmScalarRelationFilter, {nullable:true})
    film?: FilmScalarRelationFilter;
}
