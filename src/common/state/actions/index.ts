import { Dispatch } from 'redux';
import {
    IDismissAlertAction,
    IToggleProgressBarAction,
} from 'src/common/state/actions/IActions';
import {
    AlertType,
    DISMISS_ALERT,
    SHOW_ALERT,
    TOGGLE_PROGRESS_BAR,
} from 'src/common/state/actions/types';

export const showAlert = (message: string, type: AlertType) => ({
    payload: { message, type },
    type: SHOW_ALERT,
});

export const dismissAlert = () => (dispatch: Dispatch<IDismissAlertAction>) => {
    dispatch({ type: DISMISS_ALERT });
};

export const toggleProgressBar = (show: boolean) => (dispatch: Dispatch<IToggleProgressBarAction>) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: show });
};
