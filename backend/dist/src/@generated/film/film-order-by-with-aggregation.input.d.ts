import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FilmCountOrderByAggregateInput } from './film-count-order-by-aggregate.input';
import { FilmAvgOrderByAggregateInput } from './film-avg-order-by-aggregate.input';
import { FilmMaxOrderByAggregateInput } from './film-max-order-by-aggregate.input';
import { FilmMinOrderByAggregateInput } from './film-min-order-by-aggregate.input';
import { FilmSumOrderByAggregateInput } from './film-sum-order-by-aggregate.input';
export declare class FilmOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: SortOrderInput;
    genre?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    runningTime?: keyof typeof SortOrder;
    director_id?: keyof typeof SortOrder;
    posterImg?: keyof typeof SortOrder;
    release?: keyof typeof SortOrder;
    _count?: FilmCountOrderByAggregateInput;
    _avg?: FilmAvgOrderByAggregateInput;
    _max?: FilmMaxOrderByAggregateInput;
    _min?: FilmMinOrderByAggregateInput;
    _sum?: FilmSumOrderByAggregateInput;
}
