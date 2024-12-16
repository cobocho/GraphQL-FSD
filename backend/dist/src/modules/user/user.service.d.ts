import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(args: UserCreateInput): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
