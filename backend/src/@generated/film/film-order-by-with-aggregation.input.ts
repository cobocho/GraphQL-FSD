import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FilmCountOrderByAggregateInput } from './film-count-order-by-aggregate.input';
import { FilmAvgOrderByAggregateInput } from './film-avg-order-by-aggregate.input';
import { FilmMaxOrderByAggregateInput } from './film-max-order-by-aggregate.input';
import { FilmMinOrderByAggregateInput } from './film-min-order-by-aggregate.input';
import { FilmSumOrderByAggregateInput } from './film-sum-order-by-aggregate.input';

@InputType()
export class FilmOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subtitle?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    genre?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    runningTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    director_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    posterImg?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    release?: keyof typeof SortOrder;

    @Field(() => FilmCountOrderByAggregateInput, {nullable:true})
    _count?: FilmCountOrderByAggregateInput;

    @Field(() => FilmAvgOrderByAggregateInput, {nullable:true})
    _avg?: FilmAvgOrderByAggregateInput;

    @Field(() => FilmMaxOrderByAggregateInput, {nullable:true})
    _max?: FilmMaxOrderByAggregateInput;

    @Field(() => FilmMinOrderByAggregateInput, {nullable:true})
    _min?: FilmMinOrderByAggregateInput;

    @Field(() => FilmSumOrderByAggregateInput, {nullable:true})
    _sum?: FilmSumOrderByAggregateInput;
}
