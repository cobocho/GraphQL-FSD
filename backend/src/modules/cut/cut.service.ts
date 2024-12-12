import { Injectable } from '@nestjs/common';
import { Cut } from 'src/@generated/cut/cut.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CutService {
	constructor(private readonly prisma: PrismaService) {}

	async getCutByFilmId(filmId: number): Promise<Cut[]> {
		return await this.prisma.cut.findMany({
			where: {
				filmId,
			},
		});
	}
}
