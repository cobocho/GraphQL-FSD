import { DirectorUpdateWithoutFilmsInput } from './director-update-without-films.input';
import { DirectorCreateWithoutFilmsInput } from './director-create-without-films.input';
import { DirectorWhereInput } from './director-where.input';
export declare class DirectorUpsertWithoutFilmsInput {
    update: DirectorUpdateWithoutFilmsInput;
    create: DirectorCreateWithoutFilmsInput;
    where?: DirectorWhereInput;
}
