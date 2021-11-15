import { Typography } from '@material-ui/core';
import React from 'react';
import { LoadMoreButton } from 'src/league-watcher/components/LoadMoreButton';
import { MatchHistoryDisplayer } from 'src/league-watcher/components/match-history-displayer/MatchHistoryDisplayer';
import { SearchBar } from 'src/league-watcher/components/search-bar/SearchBar';

/**
 * Refactor to functional component!
 *
 * @class LeaguePageBase
 * @extends {React.Component}
 */
class LeaguePageBase extends React.Component {
    public render() {
        return (
            <div style={{ marginTop: '30px'}}>
                <Typography style={{textAlign: 'center' }} variant="h4">League Watcher</Typography>
                <SearchBar />
                <MatchHistoryDisplayer />
                <div style={{display: 'flex', justifyContent: 'center'}}><LoadMoreButton /></div>
            </div>
        );
    }
}

const LeaguePage = LeaguePageBase;

export { LeaguePage };
