import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Events from './pages/Events/Events';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Main>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/event/:id" component={Event}  />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
      </Main>
      <Footer/>
    </>
  );
}
}
export default App;
