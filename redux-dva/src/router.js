import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Main from './routes/main';
import Users from './routes/users';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
