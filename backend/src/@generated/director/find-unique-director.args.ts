import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDirectorArgs {

    @Field(() => DirectorWhereUniqueInput, {nullable:false})
    @Type(() => DirectorWhereUniqueInput)
    where!: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
}
