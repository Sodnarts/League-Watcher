import { ISetPaginationAction } from 'src/league-watcher/redux/actions/IActions';
import { SET_PAGINATION } from 'src/league-watcher/redux/actions/types';
import { ILeaguePaginationState } from 'src/league-watcher/redux/reducers/IReducer';

const INITIAL_STATE: ILeaguePaginationState = {
    position: 0,
    summonerName: '',
};

export const leaguePaginationReducer = (state = INITIAL_STATE, action: ISetPaginationAction) => {
    switch (action.type) {
        case SET_PAGINATION:
            return action.payload;
        default:
            return state;
    }
};
