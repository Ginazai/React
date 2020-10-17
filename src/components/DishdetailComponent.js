import React, {  Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem}
from 'reactstrap';

class Dish extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  fromISODate(date){
    var reg = /\d+/g;
    var time  = [];
    var format = {year: 'numeric', month: 'long', day: 'numeric'};
    time = date.match(reg);
    if (time.length > 3){
      time.splice(3, time.length);
    }
    var d = new Date(time[1] + "-" + time[2] + "-" + time[0]).toLocaleDateString(
    "en-US", format);
    return d;
  }

  renderComments(comment){
    if(comment != null){
        return(
          <div key={comment.id} className="m-1">
            <ListGroupItem>{comment.comment}</ListGroupItem>
            <ListGroupItem>--{comment.author}, {this.fromISODate(comment.date)}</ListGroupItem>
          </div>
        );
    } else {
      return(<div></div>);
    }
  }

  renderDish(dish){
    if(dish != null){
      const comment = dish.comments.map((comment) => {
        return(this.renderComments(comment));
      });
      return(
          <div className="row">
            <Card className="col-lg-5 col-md-5 col-sm-12 m-1">
                <CardImg src={dish.image} />
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                  </CardBody>
            </Card>
            <ListGroup className="col-lg-5 col-md-5 col-sm-12">
              <h4>Comments</h4>
                {comment}
            </ListGroup>
          </div>
      );
    } else{return(<div></div>);}
  }

  render(){
    const selected = this.props.selectedDish;
    return(this.renderDish(selected));
  }

}
export default Dish;
