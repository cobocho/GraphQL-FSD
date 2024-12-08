import { graphql } from '@shared/lib/gql';

export const GetFilms = graphql(`
	query GetFilms($cursor: Int, $limit: Int) {
		films(cursor: $cursor, limit: $limit) {
			cursor
			films {
				id
				title
				subtitle
				runningTime
				release
				description
				posterImg
				genre
				director {
					id
					name
				}
			}
		}
	}
`);
