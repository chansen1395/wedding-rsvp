import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config';
import RSVP from './components/RSVP';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <RSVP />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
