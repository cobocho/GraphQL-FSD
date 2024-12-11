import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DirectorScalarWhereWithAggregatesInput {

    @Field(() => [DirectorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DirectorScalarWhereWithAggregatesInput>;

    @Field(() => [DirectorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DirectorScalarWhereWithAggregatesInput>;

    @Field(() => [DirectorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DirectorScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
