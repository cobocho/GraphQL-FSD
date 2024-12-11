import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorCreateInput } from './director-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDirectorArgs {

    @Field(() => DirectorCreateInput, {nullable:false})
    @Type(() => DirectorCreateInput)
    data!: DirectorCreateInput;
}
