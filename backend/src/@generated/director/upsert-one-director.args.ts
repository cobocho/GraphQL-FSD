import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { Type } from 'class-transformer';
import { DirectorCreateInput } from './director-create.input';
import { DirectorUpdateInput } from './director-update.input';

@ArgsType()
export class UpsertOneDirectorArgs {

    @Field(() => DirectorWhereUniqueInput, {nullable:false})
    @Type(() => DirectorWhereUniqueInput)
    where!: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;

    @Field(() => DirectorCreateInput, {nullable:false})
    @Type(() => DirectorCreateInput)
    create!: DirectorCreateInput;

    @Field(() => DirectorUpdateInput, {nullable:false})
    @Type(() => DirectorUpdateInput)
    update!: DirectorUpdateInput;
}
