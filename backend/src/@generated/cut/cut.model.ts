import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Film } from '../film/film.model';

@ObjectType()
export class Cut {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    src!: string;

    @Field(() => Int, {nullable:false})
    filmId!: number;

    @Field(() => Film, {nullable:false})
    film?: Film;
}
