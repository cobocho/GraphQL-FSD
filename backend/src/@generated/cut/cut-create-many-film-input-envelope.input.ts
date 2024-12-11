import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CutCreateManyFilmInput } from './cut-create-many-film.input';
import { Type } from 'class-transformer';

@InputType()
export class CutCreateManyFilmInputEnvelope {

    @Field(() => [CutCreateManyFilmInput], {nullable:false})
    @Type(() => CutCreateManyFilmInput)
    data!: Array<CutCreateManyFilmInput>;
}
