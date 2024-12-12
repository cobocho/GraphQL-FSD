import { FilmWhereInput } from './film-where.input';
import { FilmOrderByWithAggregationInput } from './film-order-by-with-aggregation.input';
import { FilmScalarFieldEnum } from './film-scalar-field.enum';
import { FilmScalarWhereWithAggregatesInput } from './film-scalar-where-with-aggregates.input';
import { FilmCountAggregateInput } from './film-count-aggregate.input';
import { FilmAvgAggregateInput } from './film-avg-aggregate.input';
import { FilmSumAggregateInput } from './film-sum-aggregate.input';
import { FilmMinAggregateInput } from './film-min-aggregate.input';
import { FilmMaxAggregateInput } from './film-max-aggregate.input';
export declare class FilmGroupByArgs {
    where?: FilmWhereInput;
    orderBy?: Array<FilmOrderByWithAggregationInput>;
    by: Array<keyof typeof FilmScalarFieldEnum>;
    having?: FilmScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FilmCountAggregateInput;
    _avg?: FilmAvgAggregateInput;
    _sum?: FilmSumAggregateInput;
    _min?: FilmMinAggregateInput;
    _max?: FilmMaxAggregateInput;
}
