import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectorWhereInput } from '../director/director-where.input';

@InputType()
export class DirectorScalarRelationFilter {

    @Field(() => DirectorWhereInput, {nullable:true})
    is?: DirectorWhereInput;

    @Field(() => DirectorWhereInput, {nullable:true})
    isNot?: DirectorWhereInput;
}
