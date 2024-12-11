import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CutScalarWhereWithAggregatesInput {

    @Field(() => [CutScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CutScalarWhereWithAggregatesInput>;

    @Field(() => [CutScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CutScalarWhereWithAggregatesInput>;

    @Field(() => [CutScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CutScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    src?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    filmId?: IntWithAggregatesFilter;
}
