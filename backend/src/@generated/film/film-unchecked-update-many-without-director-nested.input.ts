import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutDirectorInput } from './film-create-without-director.input';
import { Type } from 'class-transformer';
import { FilmCreateOrConnectWithoutDirectorInput } from './film-create-or-connect-without-director.input';
import { FilmUpsertWithWhereUniqueWithoutDirectorInput } from './film-upsert-with-where-unique-without-director.input';
import { FilmCreateManyDirectorInputEnvelope } from './film-create-many-director-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithWhereUniqueWithoutDirectorInput } from './film-update-with-where-unique-without-director.input';
import { FilmUpdateManyWithWhereWithoutDirectorInput } from './film-update-many-with-where-without-director.input';
import { FilmScalarWhereInput } from './film-scalar-where.input';

@InputType()
export class FilmUncheckedUpdateManyWithoutDirectorNestedInput {

    @Field(() => [FilmCreateWithoutDirectorInput], {nullable:true})
    @Type(() => FilmCreateWithoutDirectorInput)
    create?: Array<FilmCreateWithoutDirectorInput>;

    @Field(() => [FilmCreateOrConnectWithoutDirectorInput], {nullable:true})
    @Type(() => FilmCreateOrConnectWithoutDirectorInput)
    connectOrCreate?: Array<FilmCreateOrConnectWithoutDirectorInput>;

    @Field(() => [FilmUpsertWithWhereUniqueWithoutDirectorInput], {nullable:true})
    @Type(() => FilmUpsertWithWhereUniqueWithoutDirectorInput)
    upsert?: Array<FilmUpsertWithWhereUniqueWithoutDirectorInput>;

    @Field(() => FilmCreateManyDirectorInputEnvelope, {nullable:true})
    @Type(() => FilmCreateManyDirectorInputEnvelope)
    createMany?: FilmCreateManyDirectorInputEnvelope;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    @Type(() => FilmWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    @Type(() => FilmWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    @Type(() => FilmWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;

    @Field(() => [FilmWhereUniqueInput], {nullable:true})
    @Type(() => FilmWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FilmWhereUniqueInput, 'id'>>;

    @Field(() => [FilmUpdateWithWhereUniqueWithoutDirectorInput], {nullable:true})
    @Type(() => FilmUpdateWithWhereUniqueWithoutDirectorInput)
    update?: Array<FilmUpdateWithWhereUniqueWithoutDirectorInput>;

    @Field(() => [FilmUpdateManyWithWhereWithoutDirectorInput], {nullable:true})
    @Type(() => FilmUpdateManyWithWhereWithoutDirectorInput)
    updateMany?: Array<FilmUpdateManyWithWhereWithoutDirectorInput>;

    @Field(() => [FilmScalarWhereInput], {nullable:true})
    @Type(() => FilmScalarWhereInput)
    deleteMany?: Array<FilmScalarWhereInput>;
}
