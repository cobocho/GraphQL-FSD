import { Injectable } from '@nestjs/common';
import ghibliData from 'src/data/ghibli';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmService {
	constructor(private readonly prisma: PrismaService) {}

	async getFilms(limit: number, cursor: number) {
		const realLimit = Math.min(limit, 6);

		if (!cursor) {
			return {
				films: [],
			};
		}

		console.log(cursor);

		const result = await this.prisma.film.findMany();

		console.log(result);

		const hasNext = result.length === realLimit;
		const nextCursor = result[result.length - 1]?.id;

		return {
			films: result,
			cursor: hasNext ? nextCursor + 1 : null,
		};
	}

	getFilmById(id: number) {
		return ghibliData.films.find((film) => film.id === id);
	}
}
