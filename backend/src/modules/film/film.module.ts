import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmResolver } from './film.resolver';
import { DirectorService } from '../director/director.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
	providers: [FilmResolver, FilmService, DirectorService, PrismaService],
	exports: [FilmService],
})
export class FilmModule {}
