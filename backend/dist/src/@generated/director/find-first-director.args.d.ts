import { DirectorWhereInput } from './director-where.input';
import { DirectorOrderByWithRelationInput } from './director-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DirectorWhereUniqueInput } from './director-where-unique.input';
import { DirectorScalarFieldEnum } from './director-scalar-field.enum';
export declare class FindFirstDirectorArgs {
    where?: DirectorWhereInput;
    orderBy?: Array<DirectorOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DirectorWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DirectorScalarFieldEnum>;
}
