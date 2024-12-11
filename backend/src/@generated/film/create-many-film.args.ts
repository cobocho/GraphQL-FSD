import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmCreateManyInput } from './film-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFilmArgs {

    @Field(() => [FilmCreateManyInput], {nullable:false})
    @Type(() => FilmCreateManyInput)
    data!: Array<FilmCreateManyInput>;
}
