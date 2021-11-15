import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';
import { LeaguePage } from 'src/league-watcher/components/LeaguePage';


/**
 * @component RouterComponent
 * @extends {<IRouter, IState>}
 */
const RouterComponentBase = () => {
    const renderContent = () => {
        
        return (
            <Switch>
                <Route path={routes.home.home} component={LeaguePage} />
                <Redirect to={routes.home.home} />
            </Switch>
        );
    };

    return <div style={{ backgroundColor: color().background }}>{renderContent()}</div>;
};

const RouterComponent = withRouter<any, typeof RouterComponentBase>(RouterComponentBase)

export { RouterComponent };
