import { registerEnumType } from '@nestjs/graphql';

export enum CutScalarFieldEnum {
    id = "id",
    src = "src",
    filmId = "filmId"
}


registerEnumType(CutScalarFieldEnum, { name: 'CutScalarFieldEnum', description: undefined })
