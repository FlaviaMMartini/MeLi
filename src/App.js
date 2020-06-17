import React, {Fragment} from "react";
import Details from "../src/components/Details";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/components/themes/default';
import history from '../src/components/history';
import { Router, Switch, Route } from 'react-router-dom';
import SearchProducts from "./components/SearchProducts";
import ListResults from '../src/components/ListResults';
import Home from '../src/components/pages/Home';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #EDEDED;
  }
`
function App() {
  return(
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    <Router history={history}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={SearchProducts}  />
            <Route path="/details/:id" component={Details} />
            <Route path="/list" component={ListResults} />
          </Switch>
        </Router>
    </ThemeProvider>
    </Fragment>
  )
}

export default App;
