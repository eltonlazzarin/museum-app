import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './pages/Home';
import News from './pages/News';
import Contacts from './pages/Contacts';
import Details from './pages/Details';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
