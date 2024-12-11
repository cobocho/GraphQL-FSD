import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorUpdateInput } from './director-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';

@ArgsType()
export class UpdateOneDirectorArgs {

    @Field(() => DirectorUpdateInput, {nullable:false})
    @Type(() => DirectorUpdateInput)
    data!: DirectorUpdateInput;

    @Field(() => DirectorWhereUniqueInput, {nullable:false})
    @Type(() => DirectorWhereUniqueInput)
    where!: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
}
