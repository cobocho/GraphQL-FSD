import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmScalarWhereInput } from './film-scalar-where.input';
import { Type } from 'class-transformer';
import { FilmUpdateManyMutationInput } from './film-update-many-mutation.input';

@InputType()
export class FilmUpdateManyWithWhereWithoutDirectorInput {

    @Field(() => FilmScalarWhereInput, {nullable:false})
    @Type(() => FilmScalarWhereInput)
    where!: FilmScalarWhereInput;

    @Field(() => FilmUpdateManyMutationInput, {nullable:false})
    @Type(() => FilmUpdateManyMutationInput)
    data!: FilmUpdateManyMutationInput;
}
