import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DirectorService {
	constructor(private readonly prisma: PrismaService) {}

	async getDirector(id: number) {
		return await this.prisma.director.findUnique({
			where: {
				id,
			},
		});
	}
}
