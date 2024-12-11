import { registerEnumType } from '@nestjs/graphql';

export enum FilmScalarFieldEnum {
    id = "id",
    title = "title",
    subtitle = "subtitle",
    genre = "genre",
    description = "description",
    runningTime = "runningTime",
    director_id = "director_id",
    posterImg = "posterImg",
    release = "release"
}


registerEnumType(FilmScalarFieldEnum, { name: 'FilmScalarFieldEnum', description: undefined })
