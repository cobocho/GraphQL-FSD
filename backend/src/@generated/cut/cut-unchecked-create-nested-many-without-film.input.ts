import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CutCreateWithoutFilmInput } from './cut-create-without-film.input';
import { Type } from 'class-transformer';
import { CutCreateOrConnectWithoutFilmInput } from './cut-create-or-connect-without-film.input';
import { CutCreateManyFilmInputEnvelope } from './cut-create-many-film-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';

@InputType()
export class CutUncheckedCreateNestedManyWithoutFilmInput {

    @Field(() => [CutCreateWithoutFilmInput], {nullable:true})
    @Type(() => CutCreateWithoutFilmInput)
    create?: Array<CutCreateWithoutFilmInput>;

    @Field(() => [CutCreateOrConnectWithoutFilmInput], {nullable:true})
    @Type(() => CutCreateOrConnectWithoutFilmInput)
    connectOrCreate?: Array<CutCreateOrConnectWithoutFilmInput>;

    @Field(() => CutCreateManyFilmInputEnvelope, {nullable:true})
    @Type(() => CutCreateManyFilmInputEnvelope)
    createMany?: CutCreateManyFilmInputEnvelope;

    @Field(() => [CutWhereUniqueInput], {nullable:true})
    @Type(() => CutWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;
}
