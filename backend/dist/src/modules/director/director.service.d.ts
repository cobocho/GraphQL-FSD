import { PrismaService } from 'src/prisma/prisma.service';
export declare class DirectorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDirector(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
