import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FilmOrderByWithRelationInput } from '../film/film-order-by-with-relation.input';

@InputType()
export class CutOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    src?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filmId?: keyof typeof SortOrder;

    @Field(() => FilmOrderByWithRelationInput, {nullable:true})
    film?: FilmOrderByWithRelationInput;
}
