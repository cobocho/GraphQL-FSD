import { DirectorWhereInput } from './director-where.input';
import { DirectorOrderByWithAggregationInput } from './director-order-by-with-aggregation.input';
import { DirectorScalarFieldEnum } from './director-scalar-field.enum';
import { DirectorScalarWhereWithAggregatesInput } from './director-scalar-where-with-aggregates.input';
import { DirectorCountAggregateInput } from './director-count-aggregate.input';
import { DirectorAvgAggregateInput } from './director-avg-aggregate.input';
import { DirectorSumAggregateInput } from './director-sum-aggregate.input';
import { DirectorMinAggregateInput } from './director-min-aggregate.input';
import { DirectorMaxAggregateInput } from './director-max-aggregate.input';
export declare class DirectorGroupByArgs {
    where?: DirectorWhereInput;
    orderBy?: Array<DirectorOrderByWithAggregationInput>;
    by: Array<keyof typeof DirectorScalarFieldEnum>;
    having?: DirectorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DirectorCountAggregateInput;
    _avg?: DirectorAvgAggregateInput;
    _sum?: DirectorSumAggregateInput;
    _min?: DirectorMinAggregateInput;
    _max?: DirectorMaxAggregateInput;
}
