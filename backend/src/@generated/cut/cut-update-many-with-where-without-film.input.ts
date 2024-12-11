import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CutScalarWhereInput } from './cut-scalar-where.input';
import { Type } from 'class-transformer';
import { CutUpdateManyMutationInput } from './cut-update-many-mutation.input';

@InputType()
export class CutUpdateManyWithWhereWithoutFilmInput {

    @Field(() => CutScalarWhereInput, {nullable:false})
    @Type(() => CutScalarWhereInput)
    where!: CutScalarWhereInput;

    @Field(() => CutUpdateManyMutationInput, {nullable:false})
    @Type(() => CutUpdateManyMutationInput)
    data!: CutUpdateManyMutationInput;
}
