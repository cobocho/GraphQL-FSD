import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorWhereInput } from './director-where.input';
import { Type } from 'class-transformer';
import { DirectorOrderByWithRelationInput } from './director-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DirectorCountAggregateInput } from './director-count-aggregate.input';
import { DirectorAvgAggregateInput } from './director-avg-aggregate.input';
import { DirectorSumAggregateInput } from './director-sum-aggregate.input';
import { DirectorMinAggregateInput } from './director-min-aggregate.input';
import { DirectorMaxAggregateInput } from './director-max-aggregate.input';

@ArgsType()
export class DirectorAggregateArgs {

    @Field(() => DirectorWhereInput, {nullable:true})
    @Type(() => DirectorWhereInput)
    where?: DirectorWhereInput;

    @Field(() => [DirectorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DirectorOrderByWithRelationInput>;

    @Field(() => DirectorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DirectorCountAggregateInput, {nullable:true})
    _count?: DirectorCountAggregateInput;

    @Field(() => DirectorAvgAggregateInput, {nullable:true})
    _avg?: DirectorAvgAggregateInput;

    @Field(() => DirectorSumAggregateInput, {nullable:true})
    _sum?: DirectorSumAggregateInput;

    @Field(() => DirectorMinAggregateInput, {nullable:true})
    _min?: DirectorMinAggregateInput;

    @Field(() => DirectorMaxAggregateInput, {nullable:true})
    _max?: DirectorMaxAggregateInput;
}
