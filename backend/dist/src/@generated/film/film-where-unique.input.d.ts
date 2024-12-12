import { FilmWhereInput } from './film-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DirectorScalarRelationFilter } from '../prisma/director-scalar-relation-filter.input';
import { CutListRelationFilter } from '../cut/cut-list-relation-filter.input';
export declare class FilmWhereUniqueInput {
    id?: number;
    AND?: Array<FilmWhereInput>;
    OR?: Array<FilmWhereInput>;
    NOT?: Array<FilmWhereInput>;
    title?: StringFilter;
    subtitle?: StringNullableFilter;
    genre?: StringFilter;
    description?: StringFilter;
    runningTime?: IntFilter;
    director_id?: IntFilter;
    posterImg?: StringFilter;
    release?: StringFilter;
    director?: DirectorScalarRelationFilter;
    Cut?: CutListRelationFilter;
}
