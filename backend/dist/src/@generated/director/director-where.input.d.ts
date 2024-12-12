import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FilmListRelationFilter } from '../film/film-list-relation-filter.input';
export declare class DirectorWhereInput {
    AND?: Array<DirectorWhereInput>;
    OR?: Array<DirectorWhereInput>;
    NOT?: Array<DirectorWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    films?: FilmListRelationFilter;
}
