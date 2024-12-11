import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CutCreateManyInput } from './cut-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCutArgs {

    @Field(() => [CutCreateManyInput], {nullable:false})
    @Type(() => CutCreateManyInput)
    data!: Array<CutCreateManyInput>;
}
