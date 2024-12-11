import { DirectorCountAggregate } from './director-count-aggregate.output';
import { DirectorAvgAggregate } from './director-avg-aggregate.output';
import { DirectorSumAggregate } from './director-sum-aggregate.output';
import { DirectorMinAggregate } from './director-min-aggregate.output';
import { DirectorMaxAggregate } from './director-max-aggregate.output';
export declare class DirectorGroupBy {
    id: number;
    name: string;
    _count?: DirectorCountAggregate;
    _avg?: DirectorAvgAggregate;
    _sum?: DirectorSumAggregate;
    _min?: DirectorMinAggregate;
    _max?: DirectorMaxAggregate;
}
