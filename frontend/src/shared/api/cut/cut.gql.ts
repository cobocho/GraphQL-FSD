import { graphql } from '@shared/lib/gql';

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
