import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
export declare class CutScalarWhereWithAggregatesInput {
    AND?: Array<CutScalarWhereWithAggregatesInput>;
    OR?: Array<CutScalarWhereWithAggregatesInput>;
    NOT?: Array<CutScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    src?: StringWithAggregatesFilter;
    filmId?: IntWithAggregatesFilter;
}
