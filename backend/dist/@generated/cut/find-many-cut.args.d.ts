import { CutWhereInput } from './cut-where.input';
import { CutOrderByWithRelationInput } from './cut-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutScalarFieldEnum } from './cut-scalar-field.enum';
export declare class FindManyCutArgs {
    where?: CutWhereInput;
    orderBy?: Array<CutOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CutScalarFieldEnum>;
}
