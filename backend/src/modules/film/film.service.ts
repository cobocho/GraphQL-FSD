import { Injectable } from '@nestjs/common';
import ghibliData from 'src/data/ghibli';

@Injectable()
export class FilmService {
	getFilms() {
		return ghibliData.films;
	}
}
