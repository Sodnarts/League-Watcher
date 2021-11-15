import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IRootAction } from 'src/common/state/actions/IActions';
import { alertReducer } from 'src/common/state/reducers/alertReducer';
import { IRootState } from 'src/common/state/reducers/IState';
import { progressBarReducer } from 'src/common/state/reducers/progressBarReducer';
import { leagueReducer } from 'src/league-watcher/redux/reducers/';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['webShop'],
};

const combinedReducers: Reducer<IRootState, IRootAction> = combineReducers({
    alert: alertReducer,
    league: leagueReducer,
    progressBar: progressBarReducer,
});

export const rootReducer = persistReducer(persistConfig, combinedReducers);
