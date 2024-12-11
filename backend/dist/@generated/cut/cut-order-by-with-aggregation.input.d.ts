import { SortOrder } from '../prisma/sort-order.enum';
import { CutCountOrderByAggregateInput } from './cut-count-order-by-aggregate.input';
import { CutAvgOrderByAggregateInput } from './cut-avg-order-by-aggregate.input';
import { CutMaxOrderByAggregateInput } from './cut-max-order-by-aggregate.input';
import { CutMinOrderByAggregateInput } from './cut-min-order-by-aggregate.input';
import { CutSumOrderByAggregateInput } from './cut-sum-order-by-aggregate.input';
export declare class CutOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    src?: keyof typeof SortOrder;
    filmId?: keyof typeof SortOrder;
    _count?: CutCountOrderByAggregateInput;
    _avg?: CutAvgOrderByAggregateInput;
    _max?: CutMaxOrderByAggregateInput;
    _min?: CutMinOrderByAggregateInput;
    _sum?: CutSumOrderByAggregateInput;
}
