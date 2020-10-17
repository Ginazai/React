import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';
import Menu from './components/MenuComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES
    };
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div>
            <NavbarBrand className="ml-1" href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }

}

export default App;
