import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutDirectorInput } from './film-create-without-director.input';
import { Type } from 'class-transformer';
import { FilmCreateOrConnectWithoutDirectorInput } from './film-create-or-connect-without-director.input';
import { FilmCreateManyDirectorInputEnvelope } from './film-create-many-director-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@InputType()
export class FilmUncheckedCreateNestedManyWithoutDirectorInput {

    @Field(() => [FilmCreateWithoutDirectorInput], {nullable:true})
    @Type(() => FilmCreateWithoutDirectorInput)
    create?: Array<FilmCreateWithoutDirectorInput>;

    @Field(() => [FilmCreateOrConnectWithoutDirectorInput], {nullable:true})
    @Type(() => FilmCreateOrConnectWithoutDirectorInput)
    connectOrCreate?: Array<FilmCreateOrConnectWithoutDirectorInput>;

    @Field(() => FilmCreateManyDirectorInputEnvelope, {nullable:true})
    @Type(() => FilmCreateManyDirectorInputEnvelope)
    createMany?: FilmCreateManyDirectorInputEnvelope;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    @Type(() => FilmWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;
}
