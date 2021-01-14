import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import theme from "./theme.js";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AlmightydrPage from "views/AlmightydrPage/AlmightydrPage";
import CallcenterPage from "views/CallcenterPage/CallcenterPage";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ThemeProvider theme={ theme }>
    <Switch>
      <Route path="/callcenter" component={CallcenterPage} />
      <Route path="/almightydr" component={AlmightydrPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={AlmightydrPage} />
    </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
