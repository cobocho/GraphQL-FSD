import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
export declare class DirectorScalarWhereWithAggregatesInput {
    AND?: Array<DirectorScalarWhereWithAggregatesInput>;
    OR?: Array<DirectorScalarWhereWithAggregatesInput>;
    NOT?: Array<DirectorScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
}
