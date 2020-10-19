import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem}
from 'reactstrap';

const Dish = ({dish}) => {

  function fromISODate(date){
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

  const RenderComments = ({comment}) => {
    if(comment != null){
        return(
          <div className="m-1">
            <ListGroupItem>{comment.comment}</ListGroupItem>
            <ListGroupItem>--{comment.author}, {fromISODate(comment.date)}
            </ListGroupItem>
          </div>
        );
    } else {
      return(<div></div>);
    }
  }

  const RenderDish = ({dish}) => {
    if(dish != null){
      const comment = dish.comments.map((comment) => {
        return(
          <RenderComments key={comment.id} comment={comment} />
        );
      });
      return(
        <div key={dish.id} className="container">
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
          </div>
      );
    } else{return(<div></div>);}
  }

  return(
    <RenderDish dish={dish}/>
  );

}

export default Dish;
