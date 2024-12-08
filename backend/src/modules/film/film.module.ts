import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmResolver } from './film.resolver';
import { DirectorService } from '../director/director.service';

@Module({
	providers: [FilmResolver, FilmService, DirectorService],
})
export class FilmModule {}
