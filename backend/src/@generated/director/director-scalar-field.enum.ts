import { registerEnumType } from '@nestjs/graphql';

export enum DirectorScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(DirectorScalarFieldEnum, { name: 'DirectorScalarFieldEnum', description: undefined })
