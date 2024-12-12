import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { DirectorCreateInput } from './director-create.input';
import { DirectorUpdateInput } from './director-update.input';
export declare class UpsertOneDirectorArgs {
    where: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
    create: DirectorCreateInput;
    update: DirectorUpdateInput;
}
