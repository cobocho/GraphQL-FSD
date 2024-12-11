import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CutUpdateManyMutationInput } from './cut-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CutWhereInput } from './cut-where.input';

@ArgsType()
export class UpdateManyCutArgs {

    @Field(() => CutUpdateManyMutationInput, {nullable:false})
    @Type(() => CutUpdateManyMutationInput)
    data!: CutUpdateManyMutationInput;

    @Field(() => CutWhereInput, {nullable:true})
    @Type(() => CutWhereInput)
    where?: CutWhereInput;
}
