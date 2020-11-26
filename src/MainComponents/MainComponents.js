import React from "react";
import Home from "../Components/Home";
import Images from "../Components/Images";
import Final from "../Components/Final";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  const HomePage = () => {
    return <Home />;
  };
  const ImagesPage = () => {
    return <Images />;
  };
  const FinalPage = () => {
    return <Final />;
  };
  return (
    <div>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/images" component={ImagesPage} />
        <Route path="/final" component={FinalPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default Main;
