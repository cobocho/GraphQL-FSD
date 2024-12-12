import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DirectorOrderByWithRelationInput } from '../director/director-order-by-with-relation.input';
import { CutOrderByRelationAggregateInput } from '../cut/cut-order-by-relation-aggregate.input';
export declare class FilmOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: SortOrderInput;
    genre?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    runningTime?: keyof typeof SortOrder;
    director_id?: keyof typeof SortOrder;
    posterImg?: keyof typeof SortOrder;
    release?: keyof typeof SortOrder;
    director?: DirectorOrderByWithRelationInput;
    Cut?: CutOrderByRelationAggregateInput;
}
