import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RouterComponent } from 'src/app-setup/Router';
import { Alert } from 'src/common/components/alert/Alert';
import { ProgressBar } from 'src/common/components/progress-bar/ProgressBar';
import * as actions from 'src/common/state/actions/index';
import { AlertType } from 'src/common/state/actions/types';
import { IAlertState, IRootState } from 'src/common/state/reducers/IState';

/**
 *
 *
 * @interface IProps
 */
interface IProps {
    alert: IAlertState;
    dismissAlert: () => void;
}

interface IState {
    alertOpen: boolean;
    message: string;
    alertType: AlertType;
}

/**
 *
 *
 * @class App
 * @extends {React.Component<IProps>}
 */
class AppBase extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            alertOpen: false,
            alertType: AlertType.error,
            message: '',
        };
    }

    public componentWillReceiveProps(props: IProps) {
        this.setState({
            alertOpen: props.alert.isOpen,
            alertType: props.alert.type,
            message: props.alert.message,
        });
    }

    public handleClose = () => {
        this.props.dismissAlert();
    };

    public render() {
        const { alertOpen, message, alertType } = this.state;

        return (
            <div>
                <BrowserRouter>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <ProgressBar />
                        <RouterComponent />
                    </div>
                    <Alert isOpen={alertOpen} message={message} handleOnClose={this.handleClose} type={alertType} />
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps({ alert }: IRootState) {
    return { alert };
}

const App = connect(mapStateToProps, actions)(AppBase);

export { App };
