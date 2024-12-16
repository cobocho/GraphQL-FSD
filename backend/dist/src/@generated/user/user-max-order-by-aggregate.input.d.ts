import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
