import { CutUpdateInput } from './cut-update.input';
import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
export declare class UpdateOneCutArgs {
    data: CutUpdateInput;
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
}
