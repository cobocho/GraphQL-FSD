import { FilmUpdateWithoutCutInput } from './film-update-without-cut.input';
import { FilmCreateWithoutCutInput } from './film-create-without-cut.input';
import { FilmWhereInput } from './film-where.input';
export declare class FilmUpsertWithoutCutInput {
    update: FilmUpdateWithoutCutInput;
    create: FilmCreateWithoutCutInput;
    where?: FilmWhereInput;
}
