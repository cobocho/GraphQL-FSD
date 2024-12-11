import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DirectorOrderByWithRelationInput } from '../director/director-order-by-with-relation.input';
import { CutOrderByRelationAggregateInput } from '../cut/cut-order-by-relation-aggregate.input';

@InputType()
export class FilmOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subtitle?: SortOrderInput;

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

    @Field(() => DirectorOrderByWithRelationInput, {nullable:true})
    director?: DirectorOrderByWithRelationInput;

    @Field(() => CutOrderByRelationAggregateInput, {nullable:true})
    Cut?: CutOrderByRelationAggregateInput;
}
