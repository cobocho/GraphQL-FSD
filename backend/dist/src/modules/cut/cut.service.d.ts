import { Cut } from 'src/@generated/cut/cut.model';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CutService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCutByFilmId(filmId: number): Promise<Cut[]>;
}
