import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FilmCreateManyDirectorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:false})
    genre!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    runningTime!: number;

    @Field(() => String, {nullable:false})
    posterImg!: string;

    @Field(() => String, {nullable:false})
    release!: string;
}
