import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CutCreateInput } from './cut-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCutArgs {

    @Field(() => CutCreateInput, {nullable:false})
    @Type(() => CutCreateInput)
    data!: CutCreateInput;
}
