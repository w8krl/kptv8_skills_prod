import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { AppContext } from './ThemeWrapper';
import {
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent,
  ResourceSearch,
  CvList,
  SkillSelector,
  ResList,
  Profile,
  SkillsDashboard,
  SkillsMatrix
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(AppContext);

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        { /* Home */ }
        <Route exact path="/app" >
          <Redirect to="/app/resource-list" />
        </Route>
        <Route path="/app/User-Settings" component={Profile} />
        <Route path="/app/dashboard" component={DashboardPage} />
        <Route path="/app/form" component={Form} />
        <Route path="/app/table" component={Table} />
        <Route path="/app/page-list" component={Parent} />
        <Route path="/app/pages/not-found" component={NotFound} />
        <Route path="/app/pages/error" component={Error} />
        <Route path="/app/Resource-Search" component={ResourceSearch} />
        <Route path="/app/Skills-Dashboard" component={SkillsDashboard} />
        <Route path="/app/Skills-Matrix" component={SkillsMatrix} />
        <Route path="/app/add-resource" component={SkillSelector} />
        <Route path="/app/resource-list" component={ResList} />
        <Route path="/app/CV-list" component={CvList} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired
};

export default Application;
