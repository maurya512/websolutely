// import dependencies
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Switch, Route } from 'react-router-dom';
// import components
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import Navbar from './components/Navbar';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// app component
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* specify a page/component that the user will be rendered to using a set path */}
        {/* specifying an exact path will render the component associated with that path */}
        <Route exact path="/" component={Home} />
        {/* define paths for other components */}
        <Route exact path="/about" component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path="/service" component={Service} />
        {/* redirect the user to homepage if no matching exact route is hit */}
        <Redirect to="/" />
      </Switch>
    </>
  )
}

// export the App component
export default App;