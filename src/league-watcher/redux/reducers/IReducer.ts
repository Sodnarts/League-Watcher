import { IMatchHistoryState } from 'src/league-watcher/redux/reducers/matchHistoryReducer';

export interface ILeaguePaginationState {
    summonerName: string;
    position: number;
}

export interface ILeagueState {
    leaguePagination: ILeaguePaginationState;
    matchHistory: IMatchHistoryState;
}
