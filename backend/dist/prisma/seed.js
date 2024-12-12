"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const ghibli_1 = require("../src/data/ghibli");
const prisma = new client_1.PrismaClient();
async function main() {
    const directors = ghibli_1.default.directors;
    const films = ghibli_1.default.films;
    const cuts = ghibli_1.default.cuts;
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
//# sourceMappingURL=seed.js.map