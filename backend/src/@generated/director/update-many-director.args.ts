import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorUpdateManyMutationInput } from './director-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DirectorWhereInput } from './director-where.input';

@ArgsType()
export class UpdateManyDirectorArgs {

    @Field(() => DirectorUpdateManyMutationInput, {nullable:false})
    @Type(() => DirectorUpdateManyMutationInput)
    data!: DirectorUpdateManyMutationInput;

    @Field(() => DirectorWhereInput, {nullable:true})
    @Type(() => DirectorWhereInput)
    where?: DirectorWhereInput;
}
