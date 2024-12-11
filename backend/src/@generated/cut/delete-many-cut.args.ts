import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CutWhereInput } from './cut-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCutArgs {

    @Field(() => CutWhereInput, {nullable:true})
    @Type(() => CutWhereInput)
    where?: CutWhereInput;
}
