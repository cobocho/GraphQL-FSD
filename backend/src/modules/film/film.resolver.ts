import {
	Resolver,
	Query,
	ResolveField,
	Root,
	Args,
	Int,
} from '@nestjs/graphql';
import { FilmService } from './film.service';
import { Film, PaginatedFilms } from './entities/film.entity';
import { Director } from '../director/entities/director.entity';
import { DirectorService } from '../director/director.service';

@Resolver(() => Film)
export class FilmResolver {
	constructor(
		private readonly filmService: FilmService,
		private readonly directorService: DirectorService,
	) {}

	@Query(() => PaginatedFilms)
	films(
		@Args('cursor', { type: () => Int, nullable: true, defaultValue: 1 })
		cursor: number,
		@Args('limit', { type: () => Int, nullable: true, defaultValue: 6 })
		limit: number,
	) {
		return this.filmService.getFilms(limit, cursor);
	}

	@ResolveField(() => Director)
	director(@Root() film: Film) {
		return this.directorService.getDirector(film.director_id);
	}
}
