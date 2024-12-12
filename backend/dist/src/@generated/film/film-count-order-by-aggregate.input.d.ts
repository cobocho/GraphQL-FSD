import { SortOrder } from '../prisma/sort-order.enum';
export declare class FilmCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    genre?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    runningTime?: keyof typeof SortOrder;
    director_id?: keyof typeof SortOrder;
    posterImg?: keyof typeof SortOrder;
    release?: keyof typeof SortOrder;
}
