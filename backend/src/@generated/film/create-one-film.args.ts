import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmCreateInput } from './film-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFilmArgs {

    @Field(() => FilmCreateInput, {nullable:false})
    @Type(() => FilmCreateInput)
    data!: FilmCreateInput;
}
