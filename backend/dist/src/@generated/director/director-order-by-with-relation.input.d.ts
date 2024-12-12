import { SortOrder } from '../prisma/sort-order.enum';
import { FilmOrderByRelationAggregateInput } from '../film/film-order-by-relation-aggregate.input';
export declare class DirectorOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    films?: FilmOrderByRelationAggregateInput;
}
