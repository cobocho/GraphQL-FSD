import { UserService } from './user.service';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    signup(args: UserCreateInput): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
