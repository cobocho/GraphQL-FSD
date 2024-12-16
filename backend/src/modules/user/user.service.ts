import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import argon2 from 'argon2';
import { UserCreateInput } from 'src/@generated/user/user-create.input';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async createUser(args: UserCreateInput) {
		const { email, password, username } = args;

		const hashed = await argon2.hash(password);

		const user = await this.prisma.user.create({
			data: {
				email,
				password: hashed,
				username,
			},
		});

		return user;
	}
}
