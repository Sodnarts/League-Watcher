import { AlertType } from 'src/common/state/actions/types';
import { ILeagueState } from 'src/league-watcher/redux/reducers/IReducer';

export interface IAlertState {
    isOpen: boolean;
    message: string;
    type: AlertType;
}

export type IProgressBarState = number;

export interface IRootState {
    alert: IAlertState;
    league: ILeagueState;
    progressBar: IProgressBarState;
}
