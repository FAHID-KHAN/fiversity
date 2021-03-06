import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {Route, Switch, Redirect} from "react-router-dom";
import PlacesToSee  from "./Components/PlacesToSee";
import PlacesToEat from "./Components/PlacesToEat";
import Navbar from "./Navbar";
import Schoolinfo from "./Components/Schoolinfo";
import Curriculum from "./Components/Curriculum";

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/about"  component={About} />
      <Route exact path="/service"  component={Service} />
      <Route exact path="/contact"  component={Contact} />
      <Route exact path="/PlacesToSee" component={PlacesToSee}/>
      <Route exact path="/PlacesToEat" component={PlacesToEat}/>
      <Route exact path="/schoolinfo"  component={Schoolinfo} />
      <Route exact path="/curriculum"  component={Curriculum} />
      <Redirect to="/" />
      <Home />
    </Switch>
    <Footer />

    </>
  );
};

export default App;
