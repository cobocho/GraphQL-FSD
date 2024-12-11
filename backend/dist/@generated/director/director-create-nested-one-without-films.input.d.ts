import { DirectorCreateWithoutFilmsInput } from './director-create-without-films.input';
import { DirectorCreateOrConnectWithoutFilmsInput } from './director-create-or-connect-without-films.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
export declare class DirectorCreateNestedOneWithoutFilmsInput {
    create?: DirectorCreateWithoutFilmsInput;
    connectOrCreate?: DirectorCreateOrConnectWithoutFilmsInput;
    connect?: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
}
