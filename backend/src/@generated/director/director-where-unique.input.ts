import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DirectorWhereInput } from './director-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FilmListRelationFilter } from '../film/film-list-relation-filter.input';

@InputType()
export class DirectorWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DirectorWhereInput], {nullable:true})
    AND?: Array<DirectorWhereInput>;

    @Field(() => [DirectorWhereInput], {nullable:true})
    OR?: Array<DirectorWhereInput>;

    @Field(() => [DirectorWhereInput], {nullable:true})
    NOT?: Array<DirectorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FilmListRelationFilter, {nullable:true})
    films?: FilmListRelationFilter;
}
