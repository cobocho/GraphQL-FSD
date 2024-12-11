import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { Type } from 'class-transformer';
import { DirectorCreateWithoutFilmsInput } from './director-create-without-films.input';

@InputType()
export class DirectorCreateOrConnectWithoutFilmsInput {

    @Field(() => DirectorWhereUniqueInput, {nullable:false})
    @Type(() => DirectorWhereUniqueInput)
    where!: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;

    @Field(() => DirectorCreateWithoutFilmsInput, {nullable:false})
    @Type(() => DirectorCreateWithoutFilmsInput)
    create!: DirectorCreateWithoutFilmsInput;
}
