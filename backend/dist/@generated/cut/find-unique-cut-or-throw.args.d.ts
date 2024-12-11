import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
export declare class FindUniqueCutOrThrowArgs {
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
}
