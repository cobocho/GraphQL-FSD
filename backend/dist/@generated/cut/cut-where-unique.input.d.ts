import { CutWhereInput } from './cut-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FilmScalarRelationFilter } from '../prisma/film-scalar-relation-filter.input';
export declare class CutWhereUniqueInput {
    id?: number;
    AND?: Array<CutWhereInput>;
    OR?: Array<CutWhereInput>;
    NOT?: Array<CutWhereInput>;
    src?: StringFilter;
    filmId?: IntFilter;
    film?: FilmScalarRelationFilter;
}
