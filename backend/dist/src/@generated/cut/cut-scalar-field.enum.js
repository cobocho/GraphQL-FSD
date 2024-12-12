"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CutScalarFieldEnum;
(function (CutScalarFieldEnum) {
    CutScalarFieldEnum["id"] = "id";
    CutScalarFieldEnum["src"] = "src";
    CutScalarFieldEnum["filmId"] = "filmId";
})(CutScalarFieldEnum || (exports.CutScalarFieldEnum = CutScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CutScalarFieldEnum, { name: 'CutScalarFieldEnum', description: undefined });
//# sourceMappingURL=cut-scalar-field.enum.js.map