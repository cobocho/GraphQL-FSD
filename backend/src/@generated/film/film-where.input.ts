import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DirectorScalarRelationFilter } from '../prisma/director-scalar-relation-filter.input';
import { CutListRelationFilter } from '../cut/cut-list-relation-filter.input';

@InputType()
export class FilmWhereInput {

    @Field(() => [FilmWhereInput], {nullable:true})
    AND?: Array<FilmWhereInput>;

    @Field(() => [FilmWhereInput], {nullable:true})
    OR?: Array<FilmWhereInput>;

    @Field(() => [FilmWhereInput], {nullable:true})
    NOT?: Array<FilmWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subtitle?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    genre?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    runningTime?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    director_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    posterImg?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    release?: StringFilter;

    @Field(() => DirectorScalarRelationFilter, {nullable:true})
    director?: DirectorScalarRelationFilter;

    @Field(() => CutListRelationFilter, {nullable:true})
    Cut?: CutListRelationFilter;
}
