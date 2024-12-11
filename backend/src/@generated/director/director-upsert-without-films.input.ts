import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectorUpdateWithoutFilmsInput } from './director-update-without-films.input';
import { Type } from 'class-transformer';
import { DirectorCreateWithoutFilmsInput } from './director-create-without-films.input';
import { DirectorWhereInput } from './director-where.input';

@InputType()
export class DirectorUpsertWithoutFilmsInput {

    @Field(() => DirectorUpdateWithoutFilmsInput, {nullable:false})
    @Type(() => DirectorUpdateWithoutFilmsInput)
    update!: DirectorUpdateWithoutFilmsInput;

    @Field(() => DirectorCreateWithoutFilmsInput, {nullable:false})
    @Type(() => DirectorCreateWithoutFilmsInput)
    create!: DirectorCreateWithoutFilmsInput;

    @Field(() => DirectorWhereInput, {nullable:true})
    @Type(() => DirectorWhereInput)
    where?: DirectorWhereInput;
}
