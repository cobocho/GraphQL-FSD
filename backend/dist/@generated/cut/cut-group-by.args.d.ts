import { CutWhereInput } from './cut-where.input';
import { CutOrderByWithAggregationInput } from './cut-order-by-with-aggregation.input';
import { CutScalarFieldEnum } from './cut-scalar-field.enum';
import { CutScalarWhereWithAggregatesInput } from './cut-scalar-where-with-aggregates.input';
import { CutCountAggregateInput } from './cut-count-aggregate.input';
import { CutAvgAggregateInput } from './cut-avg-aggregate.input';
import { CutSumAggregateInput } from './cut-sum-aggregate.input';
import { CutMinAggregateInput } from './cut-min-aggregate.input';
import { CutMaxAggregateInput } from './cut-max-aggregate.input';
export declare class CutGroupByArgs {
    where?: CutWhereInput;
    orderBy?: Array<CutOrderByWithAggregationInput>;
    by: Array<keyof typeof CutScalarFieldEnum>;
    having?: CutScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CutCountAggregateInput;
    _avg?: CutAvgAggregateInput;
    _sum?: CutSumAggregateInput;
    _min?: CutMinAggregateInput;
    _max?: CutMaxAggregateInput;
}
