import { Injectable } from '@nestjs/common';
import { Cut } from 'src/@generated/cut/cut.model';
import ghibliData from 'src/data/ghibli';

@Injectable()
export class CutService {
	getCutByFilmId(filmId: number): Cut[] {
		return ghibliData.cuts.filter((cut) => cut.filmId === filmId);
	}
}
