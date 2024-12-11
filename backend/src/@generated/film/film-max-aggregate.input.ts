import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FilmMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    subtitle?: true;

    @Field(() => Boolean, {nullable:true})
    genre?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    runningTime?: true;

    @Field(() => Boolean, {nullable:true})
    director_id?: true;

    @Field(() => Boolean, {nullable:true})
    posterImg?: true;

    @Field(() => Boolean, {nullable:true})
    release?: true;
}
