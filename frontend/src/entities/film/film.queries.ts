import { queryOptions } from '@tanstack/react-query';
import { filmService } from '@shared/api/film';

export class FilmQueries {
	private static keys = {
		films: ['films'] as const,
	};

	public static getFilms(cursor: number, limit: number) {
		return queryOptions({
			queryKey: this.keys.films,
			queryFn: () => filmService.getFilms(cursor, limit),
		});
	}
}
