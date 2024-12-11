import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
export declare class FilmScalarWhereInput {
    AND?: Array<FilmScalarWhereInput>;
    OR?: Array<FilmScalarWhereInput>;
    NOT?: Array<FilmScalarWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    subtitle?: StringNullableFilter;
    genre?: StringFilter;
    description?: StringFilter;
    runningTime?: IntFilter;
    director_id?: IntFilter;
    posterImg?: StringFilter;
    release?: StringFilter;
}
