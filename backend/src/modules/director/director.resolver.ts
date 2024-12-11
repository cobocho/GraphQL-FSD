import { Resolver, Query, Root, ResolveField } from '@nestjs/graphql';
import { DirectorService } from './director.service';
import { Director } from 'src/@generated/director/director.model';

@Resolver(() => Director)
export class DirectorResolver {
	constructor(private readonly directorService: DirectorService) {}
}
