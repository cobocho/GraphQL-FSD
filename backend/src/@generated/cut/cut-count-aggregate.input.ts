import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CutCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    src?: true;

    @Field(() => Boolean, {nullable:true})
    filmId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
