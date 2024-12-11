import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CutUpdateInput } from './cut-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';

@ArgsType()
export class UpdateOneCutArgs {

    @Field(() => CutUpdateInput, {nullable:false})
    @Type(() => CutUpdateInput)
    data!: CutUpdateInput;

    @Field(() => CutWhereUniqueInput, {nullable:false})
    @Type(() => CutWhereUniqueInput)
    where!: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
}
