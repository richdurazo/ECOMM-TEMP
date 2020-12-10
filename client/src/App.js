import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { Route, Switch, Redirect } from 'react-router-dom'; 

import './App.scss';
import Layout from './hoc/Layout/Layout';
import SignUp from './containers/Auth/SignUp';
import Posts from './components/Post/Posts/Posts';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/" exact component={Posts} />
      </Switch>
    )
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Layout>
            {routes}
          </Layout>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
