import { Injectable } from '@nestjs/common';
import ghibliData from 'src/data/ghibli';

@Injectable()
export class FilmService {
	getFilms(limit: number, cursor: number) {
		const realLimit = Math.min(limit, 6);

		if (!cursor) {
			return {
				films: [],
			};
		}

		const cursorDataIndex = ghibliData.films.findIndex(
			(film) => film.id === cursor,
		);

		if (cursorDataIndex === -1) {
			return {
				films: [],
			};
		}

		const result = ghibliData.films.slice(
			cursorDataIndex,
			cursorDataIndex + realLimit,
		);

		const nextCursor = result[result.length - 1]?.id;
		const hasNext = nextCursor < ghibliData.films.length;

		return {
			films: result,
			cursor: hasNext ? nextCursor + 1 : null,
		};
	}

	getFilmById(id: number) {
		return ghibliData.films.find((film) => film.id === id);
	}
}
