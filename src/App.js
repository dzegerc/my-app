
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Events from './pages/Events/Events';


import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Main>
          <Route path="/home" component={Home} />
          <Route path="/event" component={Event}  />
          <Route path="/events" component={Events} />
      </Main>
      <Footer/>
    </>
  );
}
}

export default App;
