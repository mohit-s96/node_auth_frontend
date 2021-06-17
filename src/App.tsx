import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>Ola amigo</div>
        </Route>
        <Route exact path="/auth">
          <div>Miraaaa</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
