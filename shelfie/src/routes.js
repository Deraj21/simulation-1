import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from "./src/components/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

{/* <Route path="/" component={Header} /> */}
export default (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/add" component={Form} />
    <Route path="/edit/:id" component={Form}/>
  </Switch>
);
