import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CutWhereInput } from './cut-where.input';
import { Type } from 'class-transformer';
import { CutOrderByWithRelationInput } from './cut-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CutScalarFieldEnum } from './cut-scalar-field.enum';

@ArgsType()
export class FindFirstCutArgs {

    @Field(() => CutWhereInput, {nullable:true})
    @Type(() => CutWhereInput)
    where?: CutWhereInput;

    @Field(() => [CutOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CutOrderByWithRelationInput>;

    @Field(() => CutWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CutScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CutScalarFieldEnum>;
}
