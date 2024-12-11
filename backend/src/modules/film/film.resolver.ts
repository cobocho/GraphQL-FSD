import {
	Resolver,
	Query,
	ResolveField,
	Root,
	Args,
	Int,
} from '@nestjs/graphql';
import { FilmService } from './film.service';
import { DirectorService } from '../director/director.service';
import { Film } from 'src/@generated/film/film.model';
import { PaginatedFilms } from './entities/PaginatedFilms';
import { Director } from 'src/@generated/director/director.model';

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

	@Query(() => Film)
	film(@Args('id', { type: () => Int }) id: number) {
		return this.filmService.getFilmById(id);
	}

	@ResolveField(() => Director)
	director(@Root() film: Film) {
		return this.directorService.getDirector(film.director_id);
	}
}
