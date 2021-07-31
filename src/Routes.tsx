import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TestRoute from "./pages/TestRoute";

function Routes() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/auth">Auth</Link>
        <Link to="/">Home</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/auth" component={TestRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
