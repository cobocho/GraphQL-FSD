"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var FilmScalarFieldEnum;
(function (FilmScalarFieldEnum) {
    FilmScalarFieldEnum["id"] = "id";
    FilmScalarFieldEnum["title"] = "title";
    FilmScalarFieldEnum["subtitle"] = "subtitle";
    FilmScalarFieldEnum["genre"] = "genre";
    FilmScalarFieldEnum["description"] = "description";
    FilmScalarFieldEnum["runningTime"] = "runningTime";
    FilmScalarFieldEnum["director_id"] = "director_id";
    FilmScalarFieldEnum["posterImg"] = "posterImg";
    FilmScalarFieldEnum["release"] = "release";
})(FilmScalarFieldEnum || (exports.FilmScalarFieldEnum = FilmScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(FilmScalarFieldEnum, { name: 'FilmScalarFieldEnum', description: undefined });
//# sourceMappingURL=film-scalar-field.enum.js.map