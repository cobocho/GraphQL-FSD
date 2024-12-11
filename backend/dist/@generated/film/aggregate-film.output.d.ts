import { FilmCountAggregate } from './film-count-aggregate.output';
import { FilmAvgAggregate } from './film-avg-aggregate.output';
import { FilmSumAggregate } from './film-sum-aggregate.output';
import { FilmMinAggregate } from './film-min-aggregate.output';
import { FilmMaxAggregate } from './film-max-aggregate.output';
export declare class AggregateFilm {
    _count?: FilmCountAggregate;
    _avg?: FilmAvgAggregate;
    _sum?: FilmSumAggregate;
    _min?: FilmMinAggregate;
    _max?: FilmMaxAggregate;
}
