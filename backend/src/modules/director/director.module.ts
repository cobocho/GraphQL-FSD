import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorResolver } from './director.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
	providers: [DirectorResolver, DirectorService, PrismaService],
	exports: [DirectorService],
})
export class DirectorModule {}
