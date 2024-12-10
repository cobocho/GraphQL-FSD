import { queryOptions } from '@tanstack/react-query';
import { cutService } from '@shared/api/cut';

export class CutQueries {
	private static keys = {
		cut: ['cut'] as const,
		cutsByFilmId: (id: number) => [this.keys.cut, id] as const,
	};

	public static getCutsByFilmId(filmId: number) {
		return queryOptions({
			queryKey: this.keys.cutsByFilmId(filmId),
			queryFn: () => cutService.getCutsByFilmId(filmId),
		});
	}
}
