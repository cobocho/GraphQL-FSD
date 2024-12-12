import { CutWhereInput } from './cut-where.input';
import { CutOrderByWithRelationInput } from './cut-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutCountAggregateInput } from './cut-count-aggregate.input';
import { CutAvgAggregateInput } from './cut-avg-aggregate.input';
import { CutSumAggregateInput } from './cut-sum-aggregate.input';
import { CutMinAggregateInput } from './cut-min-aggregate.input';
import { CutMaxAggregateInput } from './cut-max-aggregate.input';
export declare class CutAggregateArgs {
    where?: CutWhereInput;
    orderBy?: Array<CutOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: CutCountAggregateInput;
    _avg?: CutAvgAggregateInput;
    _sum?: CutSumAggregateInput;
    _min?: CutMinAggregateInput;
    _max?: CutMaxAggregateInput;
}
