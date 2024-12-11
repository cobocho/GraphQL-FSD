import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { Type } from 'class-transformer';
import { FilmCreateWithoutDirectorInput } from './film-create-without-director.input';

@InputType()
export class FilmCreateOrConnectWithoutDirectorInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    @Type(() => FilmWhereUniqueInput)
    where!: Prisma.AtLeast<FilmWhereUniqueInput, 'id'>;

    @Field(() => FilmCreateWithoutDirectorInput, {nullable:false})
    @Type(() => FilmCreateWithoutDirectorInput)
    create!: FilmCreateWithoutDirectorInput;
}
