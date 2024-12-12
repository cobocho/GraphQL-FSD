import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { DirectorCreateWithoutFilmsInput } from './director-create-without-films.input';
export declare class DirectorCreateOrConnectWithoutFilmsInput {
    where: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
    create: DirectorCreateWithoutFilmsInput;
}
