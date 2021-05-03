import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Events from './pages/Events/Events';


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Main>
          <Route exact path="/" component={Home} />
          <Route path="/event/:id" component={Event}  />
          <Route path="/events" component={Events} />
      </Main>
      <Footer/>
    </>
  );
}
}
export default App;
