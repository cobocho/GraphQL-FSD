import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorWhereInput } from './director-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDirectorArgs {

    @Field(() => DirectorWhereInput, {nullable:true})
    @Type(() => DirectorWhereInput)
    where?: DirectorWhereInput;
}
