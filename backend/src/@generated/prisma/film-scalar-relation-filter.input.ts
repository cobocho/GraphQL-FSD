import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereInput } from '../film/film-where.input';

@InputType()
export class FilmScalarRelationFilter {

    @Field(() => FilmWhereInput, {nullable:true})
    is?: FilmWhereInput;

    @Field(() => FilmWhereInput, {nullable:true})
    isNot?: FilmWhereInput;
}
