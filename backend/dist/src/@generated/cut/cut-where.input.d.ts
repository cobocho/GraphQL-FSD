import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FilmScalarRelationFilter } from '../prisma/film-scalar-relation-filter.input';
export declare class CutWhereInput {
    AND?: Array<CutWhereInput>;
    OR?: Array<CutWhereInput>;
    NOT?: Array<CutWhereInput>;
    id?: IntFilter;
    src?: StringFilter;
    filmId?: IntFilter;
    film?: FilmScalarRelationFilter;
}
