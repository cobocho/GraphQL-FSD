import { PrismaClient } from '@prisma/client';
import ghibliData from '../src/data/ghibli';

const prisma = new PrismaClient();

async function main() {
	const directors = ghibliData.directors;
	const films = ghibliData.films;
	const cuts = ghibliData.cuts;

	await prisma.director.createMany({
		data: directors,
	});
	await prisma.film.createMany({
		data: films,
	});

	await prisma.cut.createMany({
		data: cuts,
	});

	console.log('Seeding complete');
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
