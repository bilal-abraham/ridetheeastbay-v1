import React, { Fragment } from 'react'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/about" exact component={About} />
          <Route path="/" render={() => <h1>Error 404</h1>} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;