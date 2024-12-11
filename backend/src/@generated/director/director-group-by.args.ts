import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorWhereInput } from './director-where.input';
import { Type } from 'class-transformer';
import { DirectorOrderByWithAggregationInput } from './director-order-by-with-aggregation.input';
import { DirectorScalarFieldEnum } from './director-scalar-field.enum';
import { DirectorScalarWhereWithAggregatesInput } from './director-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DirectorCountAggregateInput } from './director-count-aggregate.input';
import { DirectorAvgAggregateInput } from './director-avg-aggregate.input';
import { DirectorSumAggregateInput } from './director-sum-aggregate.input';
import { DirectorMinAggregateInput } from './director-min-aggregate.input';
import { DirectorMaxAggregateInput } from './director-max-aggregate.input';

@ArgsType()
export class DirectorGroupByArgs {

    @Field(() => DirectorWhereInput, {nullable:true})
    @Type(() => DirectorWhereInput)
    where?: DirectorWhereInput;

    @Field(() => [DirectorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DirectorOrderByWithAggregationInput>;

    @Field(() => [DirectorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DirectorScalarFieldEnum>;

    @Field(() => DirectorScalarWhereWithAggregatesInput, {nullable:true})
    having?: DirectorScalarWhereWithAggregatesInput;

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
