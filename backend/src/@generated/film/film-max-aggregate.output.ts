import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FilmMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:true})
    genre?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    runningTime?: number;

    @Field(() => Int, {nullable:true})
    director_id?: number;

    @Field(() => String, {nullable:true})
    posterImg?: string;

    @Field(() => String, {nullable:true})
    release?: string;
}
