import { Injectable } from '@nestjs/common';
import { PaginateDto } from './dto/paginate';

@Injectable()
export class CommonService {
	paginate(data: unknown[], dto: PaginateDto) {
		const limit = Math.min(6, dto.limit);
	}
}
