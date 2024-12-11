import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Film } from '../film/film.model';
import { DirectorCount } from './director-count.output';

@ObjectType()
export class Director {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Film], {nullable:true})
    films?: Array<Film>;

    @Field(() => DirectorCount, {nullable:false})
    _count?: DirectorCount;
}
