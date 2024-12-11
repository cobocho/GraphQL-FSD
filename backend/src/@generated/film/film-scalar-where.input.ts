import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FilmScalarWhereInput {

    @Field(() => [FilmScalarWhereInput], {nullable:true})
    AND?: Array<FilmScalarWhereInput>;

    @Field(() => [FilmScalarWhereInput], {nullable:true})
    OR?: Array<FilmScalarWhereInput>;

    @Field(() => [FilmScalarWhereInput], {nullable:true})
    NOT?: Array<FilmScalarWhereInput>;

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
}
