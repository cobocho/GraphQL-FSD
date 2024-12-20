import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CutCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    src!: number;

    @Field(() => Int, {nullable:false})
    filmId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
