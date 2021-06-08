import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ActivitiesPage from "../pages/ActivitiesPage";
import CreateActPage from "../pages/CreateActPage";
import CountryPage from "../pages/CountryPage";
import PrincipalPage from "../pages/PrincipalPage";
import NotFoundPage from "../pages/NotFoundPage";
import SearchPage from "../pages/SearchPage";


function Routes() {
  return (
    <Switch>
      <Route exact path="/activities/create" component={CreateActPage} />
      <Route exact path="/activities/lists" component={ActivitiesPage} />
      <Route path="/countries/:idCountry" component={CountryPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/home" component={HomePage} />
      <Route exact path="/" component={PrincipalPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
