import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CutWhereInput } from './cut-where.input';

@InputType()
export class CutListRelationFilter {

    @Field(() => CutWhereInput, {nullable:true})
    every?: CutWhereInput;

    @Field(() => CutWhereInput, {nullable:true})
    some?: CutWhereInput;

    @Field(() => CutWhereInput, {nullable:true})
    none?: CutWhereInput;
}
