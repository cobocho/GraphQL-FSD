import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
export declare class DeleteOneDirectorArgs {
    where: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
}
