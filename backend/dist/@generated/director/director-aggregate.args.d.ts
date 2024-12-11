import { DirectorWhereInput } from './director-where.input';
import { DirectorOrderByWithRelationInput } from './director-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { DirectorCountAggregateInput } from './director-count-aggregate.input';
import { DirectorAvgAggregateInput } from './director-avg-aggregate.input';
import { DirectorSumAggregateInput } from './director-sum-aggregate.input';
import { DirectorMinAggregateInput } from './director-min-aggregate.input';
import { DirectorMaxAggregateInput } from './director-max-aggregate.input';
export declare class DirectorAggregateArgs {
    where?: DirectorWhereInput;
    orderBy?: Array<DirectorOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: DirectorCountAggregateInput;
    _avg?: DirectorAvgAggregateInput;
    _sum?: DirectorSumAggregateInput;
    _min?: DirectorMinAggregateInput;
    _max?: DirectorMaxAggregateInput;
}
