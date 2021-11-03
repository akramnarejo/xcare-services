import React from "react";
import Header from "./components/Header";
import ServicesList from "./pages/ServicesList";
import ServicesDetail from "./pages/ServicesDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="home">
              <h2>Welcome to XCARE</h2>
              <p>
                The aim and priority of xcare are to add value to our consumers'
                lives by providing smart solutions to all their problems. Our
                pride is providing the most extensive range of services. From
                home maintenance to personal assistance. We make sure that your
                safety is never compromised.
              </p>
              <p>For any query email us at contact@xcare.com</p>
              <img
                src="http://cypresshomecareinc.com/wp-content/uploads/2021/09/img_12_17.png"
                alt="xcare-services"
              />
            </div>
          )}
        />
        <Route exact path="/services">
          <ServicesList />
        </Route>
        <Route path="/services/:serviceId">
          <ServicesDetail />
        </Route>
      </Switch>
    </Router>
  );
}
