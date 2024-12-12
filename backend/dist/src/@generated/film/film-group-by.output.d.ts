import { FilmCountAggregate } from './film-count-aggregate.output';
import { FilmAvgAggregate } from './film-avg-aggregate.output';
import { FilmSumAggregate } from './film-sum-aggregate.output';
import { FilmMinAggregate } from './film-min-aggregate.output';
import { FilmMaxAggregate } from './film-max-aggregate.output';
export declare class FilmGroupBy {
    id: number;
    title: string;
    subtitle?: string;
    genre: string;
    description: string;
    runningTime: number;
    director_id: number;
    posterImg: string;
    release: string;
    _count?: FilmCountAggregate;
    _avg?: FilmAvgAggregate;
    _sum?: FilmSumAggregate;
    _min?: FilmMinAggregate;
    _max?: FilmMaxAggregate;
}
