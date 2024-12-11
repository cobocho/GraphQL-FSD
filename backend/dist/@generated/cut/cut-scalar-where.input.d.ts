import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
export declare class CutScalarWhereInput {
    AND?: Array<CutScalarWhereInput>;
    OR?: Array<CutScalarWhereInput>;
    NOT?: Array<CutScalarWhereInput>;
    id?: IntFilter;
    src?: StringFilter;
    filmId?: IntFilter;
}
