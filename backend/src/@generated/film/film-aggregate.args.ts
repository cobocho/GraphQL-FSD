import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmWhereInput } from './film-where.input';
import { Type } from 'class-transformer';
import { FilmOrderByWithRelationInput } from './film-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FilmCountAggregateInput } from './film-count-aggregate.input';
import { FilmAvgAggregateInput } from './film-avg-aggregate.input';
import { FilmSumAggregateInput } from './film-sum-aggregate.input';
import { FilmMinAggregateInput } from './film-min-aggregate.input';
import { FilmMaxAggregateInput } from './film-max-aggregate.input';

@ArgsType()
export class FilmAggregateArgs {

    @Field(() => FilmWhereInput, {nullable:true})
    @Type(() => FilmWhereInput)
    where?: FilmWhereInput;

    @Field(() => [FilmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FilmOrderByWithRelationInput>;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FilmCountAggregateInput, {nullable:true})
    _count?: FilmCountAggregateInput;

    @Field(() => FilmAvgAggregateInput, {nullable:true})
    _avg?: FilmAvgAggregateInput;

    @Field(() => FilmSumAggregateInput, {nullable:true})
    _sum?: FilmSumAggregateInput;

    @Field(() => FilmMinAggregateInput, {nullable:true})
    _min?: FilmMinAggregateInput;

    @Field(() => FilmMaxAggregateInput, {nullable:true})
    _max?: FilmMaxAggregateInput;
}
