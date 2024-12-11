import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutCutInput } from './film-create-without-cut.input';
import { Type } from 'class-transformer';
import { FilmCreateOrConnectWithoutCutInput } from './film-create-or-connect-without-cut.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@InputType()
export class FilmCreateNestedOneWithoutCutInput {

    @Field(() => FilmCreateWithoutCutInput, {nullable:true})
    @Type(() => FilmCreateWithoutCutInput)
    create?: FilmCreateWithoutCutInput;

    @Field(() => FilmCreateOrConnectWithoutCutInput, {nullable:true})
    @Type(() => FilmCreateOrConnectWithoutCutInput)
    connectOrCreate?: FilmCreateOrConnectWithoutCutInput;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    @Type(() => FilmWhereUniqueInput)
    connect?: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;
}