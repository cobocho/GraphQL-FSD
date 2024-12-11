import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DirectorCountOrderByAggregateInput } from './director-count-order-by-aggregate.input';
import { DirectorAvgOrderByAggregateInput } from './director-avg-order-by-aggregate.input';
import { DirectorMaxOrderByAggregateInput } from './director-max-order-by-aggregate.input';
import { DirectorMinOrderByAggregateInput } from './director-min-order-by-aggregate.input';
import { DirectorSumOrderByAggregateInput } from './director-sum-order-by-aggregate.input';

@InputType()
export class DirectorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => DirectorCountOrderByAggregateInput, {nullable:true})
    _count?: DirectorCountOrderByAggregateInput;

    @Field(() => DirectorAvgOrderByAggregateInput, {nullable:true})
    _avg?: DirectorAvgOrderByAggregateInput;

    @Field(() => DirectorMaxOrderByAggregateInput, {nullable:true})
    _max?: DirectorMaxOrderByAggregateInput;

    @Field(() => DirectorMinOrderByAggregateInput, {nullable:true})
    _min?: DirectorMinOrderByAggregateInput;

    @Field(() => DirectorSumOrderByAggregateInput, {nullable:true})
    _sum?: DirectorSumOrderByAggregateInput;
}
