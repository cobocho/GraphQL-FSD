import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectorCreateWithoutFilmsInput } from './director-create-without-films.input';
import { Type } from 'class-transformer';
import { DirectorCreateOrConnectWithoutFilmsInput } from './director-create-or-connect-without-films.input';
import { DirectorUpsertWithoutFilmsInput } from './director-upsert-without-films.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { DirectorUpdateToOneWithWhereWithoutFilmsInput } from './director-update-to-one-with-where-without-films.input';

@InputType()
export class DirectorUpdateOneRequiredWithoutFilmsNestedInput {

    @Field(() => DirectorCreateWithoutFilmsInput, {nullable:true})
    @Type(() => DirectorCreateWithoutFilmsInput)
    create?: DirectorCreateWithoutFilmsInput;

    @Field(() => DirectorCreateOrConnectWithoutFilmsInput, {nullable:true})
    @Type(() => DirectorCreateOrConnectWithoutFilmsInput)
    connectOrCreate?: DirectorCreateOrConnectWithoutFilmsInput;

    @Field(() => DirectorUpsertWithoutFilmsInput, {nullable:true})
    @Type(() => DirectorUpsertWithoutFilmsInput)
    upsert?: DirectorUpsertWithoutFilmsInput;

    @Field(() => DirectorWhereUniqueInput, {nullable:true})
    @Type(() => DirectorWhereUniqueInput)
    connect?: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;

    @Field(() => DirectorUpdateToOneWithWhereWithoutFilmsInput, {nullable:true})
    @Type(() => DirectorUpdateToOneWithWhereWithoutFilmsInput)
    update?: DirectorUpdateToOneWithWhereWithoutFilmsInput;
}
