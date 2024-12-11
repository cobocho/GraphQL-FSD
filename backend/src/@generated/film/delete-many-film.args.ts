import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmWhereInput } from './film-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFilmArgs {

    @Field(() => FilmWhereInput, {nullable:true})
    @Type(() => FilmWhereInput)
    where?: FilmWhereInput;
}
