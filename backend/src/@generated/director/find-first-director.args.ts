import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectorWhereInput } from './director-where.input';
import { Type } from 'class-transformer';
import { DirectorOrderByWithRelationInput } from './director-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DirectorScalarFieldEnum } from './director-scalar-field.enum';

@ArgsType()
export class FindFirstDirectorArgs {

    @Field(() => DirectorWhereInput, {nullable:true})
    @Type(() => DirectorWhereInput)
    where?: DirectorWhereInput;

    @Field(() => [DirectorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DirectorOrderByWithRelationInput>;

    @Field(() => DirectorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DirectorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DirectorScalarFieldEnum>;
}
