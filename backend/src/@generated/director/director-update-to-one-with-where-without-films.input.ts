import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectorWhereInput } from './director-where.input';
import { Type } from 'class-transformer';
import { DirectorUpdateWithoutFilmsInput } from './director-update-without-films.input';

@InputType()
export class DirectorUpdateToOneWithWhereWithoutFilmsInput {

    @Field(() => DirectorWhereInput, {nullable:true})
    @Type(() => DirectorWhereInput)
    where?: DirectorWhereInput;

    @Field(() => DirectorUpdateWithoutFilmsInput, {nullable:false})
    @Type(() => DirectorUpdateWithoutFilmsInput)
    data!: DirectorUpdateWithoutFilmsInput;
}
