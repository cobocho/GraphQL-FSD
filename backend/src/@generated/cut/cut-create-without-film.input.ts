import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CutCreateWithoutFilmInput {

    @Field(() => String, {nullable:false})
    src!: string;
}
