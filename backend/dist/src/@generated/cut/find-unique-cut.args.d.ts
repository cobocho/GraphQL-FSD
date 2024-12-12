import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
export declare class FindUniqueCutArgs {
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
}
