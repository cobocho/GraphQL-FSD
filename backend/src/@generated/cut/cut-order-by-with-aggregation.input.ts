import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CutCountOrderByAggregateInput } from './cut-count-order-by-aggregate.input';
import { CutAvgOrderByAggregateInput } from './cut-avg-order-by-aggregate.input';
import { CutMaxOrderByAggregateInput } from './cut-max-order-by-aggregate.input';
import { CutMinOrderByAggregateInput } from './cut-min-order-by-aggregate.input';
import { CutSumOrderByAggregateInput } from './cut-sum-order-by-aggregate.input';

@InputType()
export class CutOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    src?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filmId?: keyof typeof SortOrder;

    @Field(() => CutCountOrderByAggregateInput, {nullable:true})
    _count?: CutCountOrderByAggregateInput;

    @Field(() => CutAvgOrderByAggregateInput, {nullable:true})
    _avg?: CutAvgOrderByAggregateInput;

    @Field(() => CutMaxOrderByAggregateInput, {nullable:true})
    _max?: CutMaxOrderByAggregateInput;

    @Field(() => CutMinOrderByAggregateInput, {nullable:true})
    _min?: CutMinOrderByAggregateInput;

    @Field(() => CutSumOrderByAggregateInput, {nullable:true})
    _sum?: CutSumOrderByAggregateInput;
}
