import { graphql } from '@shared/lib/gql';

export const GetAllFilms = graphql(`
	query GetAllFilms {
		films {
			id
			title
			subtitle
			runningTime
			release
			description
			posterImg
		}
	}
`);
