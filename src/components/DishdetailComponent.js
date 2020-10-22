import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem,
Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

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

const RenderDish = ({dish}) => {
  if(dish != null){
    return(
          <Card className="col-lg-5 col-md-5 col-sm-12 m-1">
              <CardImg src={dish.image} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
          </Card>
    );
  } else{return(<div></div>);}
}

const RenderComments = ({comments}) => {
  const comment = comments.map((comment) => {
    return(
      <ListGroup className="m-2">
        <ListGroupItem>{comment.comment}</ListGroupItem>
        <ListGroupItem>-- {comment.author}, {fromISODate(comment.date)}
        </ListGroupItem>
      </ListGroup>
    );
  });
  return(comment);
}

const Dish = ({dish, comments}) => {
  if(dish != null){
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
          <div className="row">
          <RenderDish dish={dish}/>
          <div className="col-lg-5 col-md-5 col-sm-12 m-1">
            <h3>Comments</h3><hr/>
            <RenderComments comments={comments} />
          </div>
          </div>
        </div>
      </div>
    );
  } else {return(<div></div>);}

}

export default Dish;
