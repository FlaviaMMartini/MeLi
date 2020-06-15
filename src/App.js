import React, {Fragment} from "react";
import Home from "../src/components/pages/Home";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/components/themes/default';

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
    <Home />
    </ThemeProvider>
    </Fragment>
  )
}

export default App;
