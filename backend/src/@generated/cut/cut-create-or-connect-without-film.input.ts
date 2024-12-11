import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { Type } from 'class-transformer';
import { CutCreateWithoutFilmInput } from './cut-create-without-film.input';

@InputType()
export class CutCreateOrConnectWithoutFilmInput {

    @Field(() => CutWhereUniqueInput, {nullable:false})
    @Type(() => CutWhereUniqueInput)
    where!: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;

    @Field(() => CutCreateWithoutFilmInput, {nullable:false})
    @Type(() => CutCreateWithoutFilmInput)
    create!: CutCreateWithoutFilmInput;
}
