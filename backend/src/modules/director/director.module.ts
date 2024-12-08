import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorResolver } from './director.resolver';

@Module({
	providers: [DirectorResolver, DirectorService],
	exports: [DirectorService],
})
export class DirectorModule {}
