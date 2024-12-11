import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
export declare class FilmScalarWhereWithAggregatesInput {
    AND?: Array<FilmScalarWhereWithAggregatesInput>;
    OR?: Array<FilmScalarWhereWithAggregatesInput>;
    NOT?: Array<FilmScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    title?: StringWithAggregatesFilter;
    subtitle?: StringNullableWithAggregatesFilter;
    genre?: StringWithAggregatesFilter;
    description?: StringWithAggregatesFilter;
    runningTime?: IntWithAggregatesFilter;
    director_id?: IntWithAggregatesFilter;
    posterImg?: StringWithAggregatesFilter;
    release?: StringWithAggregatesFilter;
}
