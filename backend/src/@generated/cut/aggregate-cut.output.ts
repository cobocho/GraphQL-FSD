import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CutCountAggregate } from './cut-count-aggregate.output';
import { CutAvgAggregate } from './cut-avg-aggregate.output';
import { CutSumAggregate } from './cut-sum-aggregate.output';
import { CutMinAggregate } from './cut-min-aggregate.output';
import { CutMaxAggregate } from './cut-max-aggregate.output';

@ObjectType()
export class AggregateCut {

    @Field(() => CutCountAggregate, {nullable:true})
    _count?: CutCountAggregate;

    @Field(() => CutAvgAggregate, {nullable:true})
    _avg?: CutAvgAggregate;

    @Field(() => CutSumAggregate, {nullable:true})
    _sum?: CutSumAggregate;

    @Field(() => CutMinAggregate, {nullable:true})
    _min?: CutMinAggregate;

    @Field(() => CutMaxAggregate, {nullable:true})
    _max?: CutMaxAggregate;
}
