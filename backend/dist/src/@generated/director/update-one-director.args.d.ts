import { DirectorUpdateInput } from './director-update.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
export declare class UpdateOneDirectorArgs {
    data: DirectorUpdateInput;
    where: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
}
