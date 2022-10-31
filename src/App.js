import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Videos from "./containers/Videos";


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/video/:id" component={Videos} exact />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
