import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FilmMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subtitle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genre?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    runningTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    director_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    posterImg?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    release?: keyof typeof SortOrder;
}
