import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeamsListPage from './TeamsListPage';
import OneTeamDetails from './OneTeamDetails';
import HeaderBar from '../Components/HeaderBar';

export const TEAMS = '/teams';
export const ONE_TEAM = `/teams/`;

const AppRoutes: React.FunctionComponent = () => (
    <Router>
        <HeaderBar />
        <Switch>
            <Route exact path={'/'} component={TeamsListPage} />
            <Route exact path={TEAMS} component={TeamsListPage} />
            <Route path={ONE_TEAM} component={OneTeamDetails} />
        </Switch>
    </Router>
);

export default AppRoutes;
