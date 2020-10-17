import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dish from './DishdetailComponent';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {selectedDish: null};
  }

  onDishSelected(dish){
    this.setState({selectedDish: dish});
  }

  render(){
    const menu = this.props.dishes.map((dish) => {
      return(
        <div key={dish.id} className="col-lg-5 col-md-5 m-1">
          <Card onClick={() => this.onDishSelected(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="container">
          <Dish selectedDish={this.state.selectedDish}/>
        </div>
      </div>
    );
  }

}
 export default Menu;
