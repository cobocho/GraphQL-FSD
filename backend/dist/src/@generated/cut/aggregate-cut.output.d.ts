import { CutCountAggregate } from './cut-count-aggregate.output';
import { CutAvgAggregate } from './cut-avg-aggregate.output';
import { CutSumAggregate } from './cut-sum-aggregate.output';
import { CutMinAggregate } from './cut-min-aggregate.output';
import { CutMaxAggregate } from './cut-max-aggregate.output';
export declare class AggregateCut {
    _count?: CutCountAggregate;
    _avg?: CutAvgAggregate;
    _sum?: CutSumAggregate;
    _min?: CutMinAggregate;
    _max?: CutMaxAggregate;
}
