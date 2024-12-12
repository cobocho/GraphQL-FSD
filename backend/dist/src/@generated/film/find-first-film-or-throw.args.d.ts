import { FilmWhereInput } from './film-where.input';
import { FilmOrderByWithRelationInput } from './film-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmScalarFieldEnum } from './film-scalar-field.enum';
export declare class FindFirstFilmOrThrowArgs {
    where?: FilmWhereInput;
    orderBy?: Array<FilmOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FilmScalarFieldEnum>;
}
