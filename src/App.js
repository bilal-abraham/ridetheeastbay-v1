import React, { Fragment } from 'react'
import Home from './components/pages/Home'
import ChatRooms from './components/pages/ChatRooms'
import About from './components/pages/About'
import Error404 from './components/pages/Error404'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chatrooms" exact component={ChatRooms} />
          <Route path="/about" exact component={About} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;