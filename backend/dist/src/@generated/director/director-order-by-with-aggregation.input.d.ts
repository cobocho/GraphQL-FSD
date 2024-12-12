import { SortOrder } from '../prisma/sort-order.enum';
import { DirectorCountOrderByAggregateInput } from './director-count-order-by-aggregate.input';
import { DirectorAvgOrderByAggregateInput } from './director-avg-order-by-aggregate.input';
import { DirectorMaxOrderByAggregateInput } from './director-max-order-by-aggregate.input';
import { DirectorMinOrderByAggregateInput } from './director-min-order-by-aggregate.input';
import { DirectorSumOrderByAggregateInput } from './director-sum-order-by-aggregate.input';
export declare class DirectorOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    _count?: DirectorCountOrderByAggregateInput;
    _avg?: DirectorAvgOrderByAggregateInput;
    _max?: DirectorMaxOrderByAggregateInput;
    _min?: DirectorMinOrderByAggregateInput;
    _sum?: DirectorSumOrderByAggregateInput;
}
