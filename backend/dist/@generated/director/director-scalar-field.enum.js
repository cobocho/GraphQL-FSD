"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var DirectorScalarFieldEnum;
(function (DirectorScalarFieldEnum) {
    DirectorScalarFieldEnum["id"] = "id";
    DirectorScalarFieldEnum["name"] = "name";
})(DirectorScalarFieldEnum || (exports.DirectorScalarFieldEnum = DirectorScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(DirectorScalarFieldEnum, { name: 'DirectorScalarFieldEnum', description: undefined });
//# sourceMappingURL=director-scalar-field.enum.js.map