import { Prisma } from '@prisma/client';
import { CutWhereUniqueInput } from './cut-where-unique.input';
import { CutCreateInput } from './cut-create.input';
import { CutUpdateInput } from './cut-update.input';
export declare class UpsertOneCutArgs {
    where: Prisma.AtLeast<CutWhereUniqueInput, 'id'>;
    create: CutCreateInput;
    update: CutUpdateInput;
}
