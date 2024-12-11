import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FilmListRelationFilter } from '../film/film-list-relation-filter.input';

@InputType()
export class DirectorWhereInput {

    @Field(() => [DirectorWhereInput], {nullable:true})
    AND?: Array<DirectorWhereInput>;

    @Field(() => [DirectorWhereInput], {nullable:true})
    OR?: Array<DirectorWhereInput>;

    @Field(() => [DirectorWhereInput], {nullable:true})
    NOT?: Array<DirectorWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FilmListRelationFilter, {nullable:true})
    films?: FilmListRelationFilter;
}
