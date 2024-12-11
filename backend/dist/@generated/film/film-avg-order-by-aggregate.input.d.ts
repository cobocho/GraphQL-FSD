import { SortOrder } from '../prisma/sort-order.enum';
export declare class FilmAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    runningTime?: keyof typeof SortOrder;
    director_id?: keyof typeof SortOrder;
}