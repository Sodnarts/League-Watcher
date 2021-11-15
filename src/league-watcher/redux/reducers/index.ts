import { combineReducers, Reducer } from 'redux';
import {
    ILeagueAction,
} from 'src/league-watcher/redux/actions/IActions';
import { ILeagueState } from 'src/league-watcher/redux/reducers/IReducer';
import { leaguePaginationReducer } from 'src/league-watcher/redux/reducers/leaguePaginationReducer';
import { matchHistoryReducer } from 'src/league-watcher/redux/reducers/matchHistoryReducer';

const leagueReducer: Reducer<
    ILeagueState,
    ILeagueAction
> = combineReducers({
    leaguePagination: leaguePaginationReducer,
    matchHistory: matchHistoryReducer,
});

export { leagueReducer };
