import { Module } from '@nestjs/common';
import { CutService } from './cut.service';
import { CutResolver } from './cut.resolver';
import { FilmService } from 'src/modules/film/film.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
	providers: [CutService, CutResolver, FilmService, PrismaService],
})
export class CutModule {}
