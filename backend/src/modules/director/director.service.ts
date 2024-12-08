import { Injectable } from '@nestjs/common';
import ghibliData from 'src/data/ghibli';

@Injectable()
export class DirectorService {
	getDirector(id: number) {
		return ghibliData.directors.find((director) => director.id === id);
	}
}
