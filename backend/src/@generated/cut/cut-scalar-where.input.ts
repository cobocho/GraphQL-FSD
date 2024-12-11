import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CutScalarWhereInput {

    @Field(() => [CutScalarWhereInput], {nullable:true})
    AND?: Array<CutScalarWhereInput>;

    @Field(() => [CutScalarWhereInput], {nullable:true})
    OR?: Array<CutScalarWhereInput>;

    @Field(() => [CutScalarWhereInput], {nullable:true})
    NOT?: Array<CutScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    src?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    filmId?: IntFilter;
}
