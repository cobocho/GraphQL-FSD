import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
export declare class FindUniqueDirectorArgs {
    where: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
}
