import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeParallaxAnimation from "../views/all-home-version/HomeParallaxAnimation";
import HomeTextLoopAnimation from "../views/all-home-version/HomeTextLoopAnimation";
import HomeTyperCreative from "../views/all-home-version/HomeTyperCreative";
import HomeParallaxTyper from "../views/all-home-version/HomeParallaxTyper";
import HomeDarkBubbleAnimation from "../views/all-home-version/HomeDarkBubbleAnimation";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeDarkParticles} />
          <Route path="/home-light" component={HomeLight} />
          <Route path="/home-light-animation" component={HomeLightAnimation} />
          <Route path="/home-dark" component={HomeDark} />
          <Route path="/home-dark-animation" component={HomeDarkAnimation} />
          <Route path="/home-parallax" component={HomeParallaxAnimation} />
          <Route path="/home-text-loop" component={HomeTextLoopAnimation} />
          <Route path="/home-typer-creative" component={HomeTyperCreative} />
          <Route path="/home-parallax-typer" component={HomeParallaxTyper} />
          <Route path="/home-dark-bubble" component={HomeDarkBubbleAnimation} />
          <Route path="/home-dark-particles" component={HomeDarkParticles} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
