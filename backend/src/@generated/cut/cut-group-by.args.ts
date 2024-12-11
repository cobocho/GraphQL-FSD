import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CutWhereInput } from './cut-where.input';
import { Type } from 'class-transformer';
import { CutOrderByWithAggregationInput } from './cut-order-by-with-aggregation.input';
import { CutScalarFieldEnum } from './cut-scalar-field.enum';
import { CutScalarWhereWithAggregatesInput } from './cut-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CutCountAggregateInput } from './cut-count-aggregate.input';
import { CutAvgAggregateInput } from './cut-avg-aggregate.input';
import { CutSumAggregateInput } from './cut-sum-aggregate.input';
import { CutMinAggregateInput } from './cut-min-aggregate.input';
import { CutMaxAggregateInput } from './cut-max-aggregate.input';

@ArgsType()
export class CutGroupByArgs {

    @Field(() => CutWhereInput, {nullable:true})
    @Type(() => CutWhereInput)
    where?: CutWhereInput;

    @Field(() => [CutOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CutOrderByWithAggregationInput>;

    @Field(() => [CutScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CutScalarFieldEnum>;

    @Field(() => CutScalarWhereWithAggregatesInput, {nullable:true})
    having?: CutScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CutCountAggregateInput, {nullable:true})
    _count?: CutCountAggregateInput;

    @Field(() => CutAvgAggregateInput, {nullable:true})
    _avg?: CutAvgAggregateInput;

    @Field(() => CutSumAggregateInput, {nullable:true})
    _sum?: CutSumAggregateInput;

    @Field(() => CutMinAggregateInput, {nullable:true})
    _min?: CutMinAggregateInput;

    @Field(() => CutMaxAggregateInput, {nullable:true})
    _max?: CutMaxAggregateInput;
}
