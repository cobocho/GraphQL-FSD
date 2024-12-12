import { DirectorWhereInput } from './director-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FilmListRelationFilter } from '../film/film-list-relation-filter.input';
export declare class DirectorWhereUniqueInput {
    id?: number;
    AND?: Array<DirectorWhereInput>;
    OR?: Array<DirectorWhereInput>;
    NOT?: Array<DirectorWhereInput>;
    name?: StringFilter;
    films?: FilmListRelationFilter;
}
