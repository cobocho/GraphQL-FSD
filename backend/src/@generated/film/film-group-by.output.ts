import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FilmCountAggregate } from './film-count-aggregate.output';
import { FilmAvgAggregate } from './film-avg-aggregate.output';
import { FilmSumAggregate } from './film-sum-aggregate.output';
import { FilmMinAggregate } from './film-min-aggregate.output';
import { FilmMaxAggregate } from './film-max-aggregate.output';

@ObjectType()
export class FilmGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:false})
    genre!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    runningTime!: number;

    @Field(() => Int, {nullable:false})
    director_id!: number;

    @Field(() => String, {nullable:false})
    posterImg!: string;

    @Field(() => String, {nullable:false})
    release!: string;

    @Field(() => FilmCountAggregate, {nullable:true})
    _count?: FilmCountAggregate;

    @Field(() => FilmAvgAggregate, {nullable:true})
    _avg?: FilmAvgAggregate;

    @Field(() => FilmSumAggregate, {nullable:true})
    _sum?: FilmSumAggregate;

    @Field(() => FilmMinAggregate, {nullable:true})
    _min?: FilmMinAggregate;

    @Field(() => FilmMaxAggregate, {nullable:true})
    _max?: FilmMaxAggregate;
}
