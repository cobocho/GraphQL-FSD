import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmUpdateManyMutationInput } from './film-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FilmWhereInput } from './film-where.input';

@ArgsType()
export class UpdateManyFilmArgs {

    @Field(() => FilmUpdateManyMutationInput, {nullable:false})
    @Type(() => FilmUpdateManyMutationInput)
    data!: FilmUpdateManyMutationInput;

    @Field(() => FilmWhereInput, {nullable:true})
    @Type(() => FilmWhereInput)
    where?: FilmWhereInput;
}
