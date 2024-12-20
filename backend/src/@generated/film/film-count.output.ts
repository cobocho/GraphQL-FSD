import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FilmCount {

    @Field(() => Int, {nullable:false})
    Cut?: number;
}
