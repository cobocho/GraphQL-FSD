import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CutCreateWithoutFilmInput } from './cut-create-without-film.input';
import { Type } from 'class-transformer';
import { CutCreateOrConnectWithoutFilmInput } from './cut-create-or-connect-without-film.input';
import { CutUpsertWithWhereUniqueWithoutFilmInput } from './cut-upsert-with-where-unique-without-film.input';
import { CutCreateManyFilmInputEnvelope } from './cut-create-many-film-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutUpdateWithWhereUniqueWithoutFilmInput } from './cut-update-with-where-unique-without-film.input';
import { CutUpdateManyWithWhereWithoutFilmInput } from './cut-update-many-with-where-without-film.input';
import { CutScalarWhereInput } from './cut-scalar-where.input';

@InputType()
export class CutUncheckedUpdateManyWithoutFilmNestedInput {

    @Field(() => [CutCreateWithoutFilmInput], {nullable:true})
    @Type(() => CutCreateWithoutFilmInput)
    create?: Array<CutCreateWithoutFilmInput>;

    @Field(() => [CutCreateOrConnectWithoutFilmInput], {nullable:true})
    @Type(() => CutCreateOrConnectWithoutFilmInput)
    connectOrCreate?: Array<CutCreateOrConnectWithoutFilmInput>;

    @Field(() => [CutUpsertWithWhereUniqueWithoutFilmInput], {nullable:true})
    @Type(() => CutUpsertWithWhereUniqueWithoutFilmInput)
    upsert?: Array<CutUpsertWithWhereUniqueWithoutFilmInput>;

    @Field(() => CutCreateManyFilmInputEnvelope, {nullable:true})
    @Type(() => CutCreateManyFilmInputEnvelope)
    createMany?: CutCreateManyFilmInputEnvelope;

    @Field(() => [CutWhereUniqueInput], {nullable:true})
    @Type(() => CutWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;

    @Field(() => [CutWhereUniqueInput], {nullable:true})
    @Type(() => CutWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;

    @Field(() => [CutWhereUniqueInput], {nullable:true})
    @Type(() => CutWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;

    @Field(() => [CutWhereUniqueInput], {nullable:true})
    @Type(() => CutWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CutWhereUniqueInput, 'id'>>;

    @Field(() => [CutUpdateWithWhereUniqueWithoutFilmInput], {nullable:true})
    @Type(() => CutUpdateWithWhereUniqueWithoutFilmInput)
    update?: Array<CutUpdateWithWhereUniqueWithoutFilmInput>;

    @Field(() => [CutUpdateManyWithWhereWithoutFilmInput], {nullable:true})
    @Type(() => CutUpdateManyWithWhereWithoutFilmInput)
    updateMany?: Array<CutUpdateManyWithWhereWithoutFilmInput>;

    @Field(() => [CutScalarWhereInput], {nullable:true})
    @Type(() => CutScalarWhereInput)
    deleteMany?: Array<CutScalarWhereInput>;
}
