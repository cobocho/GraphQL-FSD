import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { Type } from 'class-transformer';
import { CutCreateInput } from './cut-create.input';
import { CutUpdateInput } from './cut-update.input';

@ArgsType()
export class UpsertOneCutArgs {

    @Field(() => CutWhereUniqueInput, {nullable:false})
    @Type(() => CutWhereUniqueInput)
    where!: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;

    @Field(() => CutCreateInput, {nullable:false})
    @Type(() => CutCreateInput)
    create!: CutCreateInput;

    @Field(() => CutUpdateInput, {nullable:false})
    @Type(() => CutUpdateInput)
    update!: CutUpdateInput;
}
