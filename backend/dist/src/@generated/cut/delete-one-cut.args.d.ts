import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
export declare class DeleteOneCutArgs {
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
}
