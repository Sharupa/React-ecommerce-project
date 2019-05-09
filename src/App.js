import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Home from "./components/Home";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/ProductList" component={ProductList}></Route>
          <Route exact path="/contact" component={Contact}></Route> 
          <Route exact path="/login" component={Login}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
