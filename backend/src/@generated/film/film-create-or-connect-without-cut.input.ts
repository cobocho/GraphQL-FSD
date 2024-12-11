import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { Type } from 'class-transformer';
import { FilmCreateWithoutCutInput } from './film-create-without-cut.input';

@InputType()
export class FilmCreateOrConnectWithoutCutInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    @Type(() => FilmWhereUniqueInput)
    where!: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;

    @Field(() => FilmCreateWithoutCutInput, {nullable:false})
    @Type(() => FilmCreateWithoutCutInput)
    create!: FilmCreateWithoutCutInput;
}
