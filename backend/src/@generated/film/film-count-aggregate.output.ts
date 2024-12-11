import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FilmCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    subtitle!: number;

    @Field(() => Int, {nullable:false})
    genre!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    runningTime!: number;

    @Field(() => Int, {nullable:false})
    director_id!: number;

    @Field(() => Int, {nullable:false})
    posterImg!: number;

    @Field(() => Int, {nullable:false})
    release!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
