import {
    AlertType,
    DISMISS_ALERT,
    SHOW_ALERT,
    TOGGLE_PROGRESS_BAR,
} from 'src/common/state/actions/types';
import { ILeagueAction } from 'src/league-watcher/redux/actions/IActions';

export interface IShowAlertAction {
    type: typeof SHOW_ALERT;
    payload: {
        message: string;
        type: AlertType;
    };
}

export interface IDismissAlertAction {
    type: typeof DISMISS_ALERT;
}

export interface IToggleProgressBarAction {
    type: typeof TOGGLE_PROGRESS_BAR;
    payload: boolean;
}

export type IRootAction = IToggleProgressBarAction | (IShowAlertAction & IDismissAlertAction) | ILeagueAction;  