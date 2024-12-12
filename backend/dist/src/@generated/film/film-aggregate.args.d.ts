import { FilmWhereInput } from './film-where.input';
import { FilmOrderByWithRelationInput } from './film-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCountAggregateInput } from './film-count-aggregate.input';
import { FilmAvgAggregateInput } from './film-avg-aggregate.input';
import { FilmSumAggregateInput } from './film-sum-aggregate.input';
import { FilmMinAggregateInput } from './film-min-aggregate.input';
import { FilmMaxAggregateInput } from './film-max-aggregate.input';
export declare class FilmAggregateArgs {
    where?: FilmWhereInput;
    orderBy?: Array<FilmOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: FilmCountAggregateInput;
    _avg?: FilmAvgAggregateInput;
    _sum?: FilmSumAggregateInput;
    _min?: FilmMinAggregateInput;
    _max?: FilmMaxAggregateInput;
}
