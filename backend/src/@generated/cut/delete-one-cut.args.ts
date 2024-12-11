import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCutArgs {

    @Field(() => CutWhereUniqueInput, {nullable:false})
    @Type(() => CutWhereUniqueInput)
    where!: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
}
