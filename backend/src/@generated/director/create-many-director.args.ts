import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorCreateManyInput } from './director-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDirectorArgs {

    @Field(() => [DirectorCreateManyInput], {nullable:false})
    @Type(() => DirectorCreateManyInput)
    data!: Array<DirectorCreateManyInput>;
}
