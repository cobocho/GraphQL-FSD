import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DirectorCountAggregate } from './director-count-aggregate.output';
import { DirectorAvgAggregate } from './director-avg-aggregate.output';
import { DirectorSumAggregate } from './director-sum-aggregate.output';
import { DirectorMinAggregate } from './director-min-aggregate.output';
import { DirectorMaxAggregate } from './director-max-aggregate.output';

@ObjectType()
export class AggregateDirector {

    @Field(() => DirectorCountAggregate, {nullable:true})
    _count?: DirectorCountAggregate;

    @Field(() => DirectorAvgAggregate, {nullable:true})
    _avg?: DirectorAvgAggregate;

    @Field(() => DirectorSumAggregate, {nullable:true})
    _sum?: DirectorSumAggregate;

    @Field(() => DirectorMinAggregate, {nullable:true})
    _min?: DirectorMinAggregate;

    @Field(() => DirectorMaxAggregate, {nullable:true})
    _max?: DirectorMaxAggregate;
}
