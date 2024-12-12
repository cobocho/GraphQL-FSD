import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
export declare class FindUniqueDirectorOrThrowArgs {
    where: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
}
