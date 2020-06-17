import React, {Fragment} from "react";
import Details from "../src/components/Details";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/components/themes/default';
import history from '../src/components/history';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
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
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
    </Fragment>
  )
}

export default App;
