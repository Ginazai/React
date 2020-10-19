import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Dish from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishId){
    this.setState({selectedDish: dishId});
  }

  render(){
    return (
      <div>
        <Header />
        <Menu onClick={(dishId) => this.onDishSelected(dishId)}
        dishes={this.state.dishes}/>
      <Dish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      <Footer />
    </div>
    );
  }

}

export default Main;
