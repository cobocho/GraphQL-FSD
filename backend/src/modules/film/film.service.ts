import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmService {
	constructor(private readonly prisma: PrismaService) {}

	async getFilms(limit: number, cursor: number) {
		const realLimit = Math.min(limit, 6);

		const result = await this.prisma.film.findMany({
			take: realLimit,
			skip: cursor,
		});

		const hasNext = result.length === realLimit;
		const nextCursor = result[result.length - 1]?.id;

		return {
			films: result,
			cursor: hasNext ? nextCursor + 1 : null,
		};
	}

	async getFilmById(id: number) {
		return await this.prisma.film.findUnique({
			where: {
				id,
			},
		});
	}
}
