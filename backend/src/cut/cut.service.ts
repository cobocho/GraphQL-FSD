import { Injectable } from '@nestjs/common';
import ghibliData from 'src/data/ghibli';
import { Cut } from './entities/cut.entity';

@Injectable()
export class CutService {
	getCutByFilmId(filmId: number): Cut[] {
		return ghibliData.cuts.filter((cut) => cut.filmId === filmId);
	}
}
