import { Resolver, Query, Root, ResolveField } from '@nestjs/graphql';
import { DirectorService } from './director.service';
import { Director } from './entities/director.entity';
import { Film } from '../film/entities/film.entity';

@Resolver(() => Director)
export class DirectorResolver {
	constructor(private readonly directorService: DirectorService) {}
}
