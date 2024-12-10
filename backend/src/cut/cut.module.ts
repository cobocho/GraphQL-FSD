import { Module } from '@nestjs/common';
import { CutService } from './cut.service';
import { CutResolver } from './cut.resolver';
import { FilmService } from 'src/modules/film/film.service';

@Module({
	providers: [CutService, CutResolver, FilmService],
})
export class CutModule {}
