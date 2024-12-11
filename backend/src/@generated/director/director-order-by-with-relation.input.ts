import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FilmOrderByRelationAggregateInput } from '../film/film-order-by-relation-aggregate.input';

@InputType()
export class DirectorOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => FilmOrderByRelationAggregateInput, {nullable:true})
    films?: FilmOrderByRelationAggregateInput;
}
