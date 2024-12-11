import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateManyDirectorInput } from './film-create-many-director.input';
import { Type } from 'class-transformer';

@InputType()
export class FilmCreateManyDirectorInputEnvelope {

    @Field(() => [FilmCreateManyDirectorInput], {nullable:false})
    @Type(() => FilmCreateManyDirectorInput)
    data!: Array<FilmCreateManyDirectorInput>;
}
