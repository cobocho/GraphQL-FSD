import { SortOrder } from '../prisma/sort-order.enum';
import { FilmOrderByWithRelationInput } from '../film/film-order-by-with-relation.input';
export declare class CutOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    src?: keyof typeof SortOrder;
    filmId?: keyof typeof SortOrder;
    film?: FilmOrderByWithRelationInput;
}
