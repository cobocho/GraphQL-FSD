import { graphql } from '@shared/lib/codegen';

export const GetCutsByFilmId = graphql(`
	query cuts($filmId: Int!) {
		cuts(filmId: $filmId) {
			id
			src
			film {
				title
			}
		}
	}
`);
