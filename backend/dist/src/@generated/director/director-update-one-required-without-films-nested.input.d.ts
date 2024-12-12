import { DirectorCreateWithoutFilmsInput } from './director-create-without-films.input';
import { DirectorCreateOrConnectWithoutFilmsInput } from './director-create-or-connect-without-films.input';
import { DirectorUpsertWithoutFilmsInput } from './director-upsert-without-films.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { DirectorUpdateToOneWithWhereWithoutFilmsInput } from './director-update-to-one-with-where-without-films.input';
export declare class DirectorUpdateOneRequiredWithoutFilmsNestedInput {
    create?: DirectorCreateWithoutFilmsInput;
    connectOrCreate?: DirectorCreateOrConnectWithoutFilmsInput;
    upsert?: DirectorUpsertWithoutFilmsInput;
    connect?: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
    update?: DirectorUpdateToOneWithWhereWithoutFilmsInput;
}
