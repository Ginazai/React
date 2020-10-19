import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Dish from './DishdetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishId){
    this.setState({selectedDish: dishId});
  }

  render(){
    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}
            />} />
          <Route to="/home" component={HomePage}/>
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
