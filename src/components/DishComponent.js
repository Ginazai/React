import React, {  Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dish extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){

    if (this.props.selectedDish != null){
      const selected = this.props.selectedDish;
      const comments = this.props.selectedDish.comments.map((comment) => {
        return(
            <CardBody key={comment.id}>
              <CardTitle>
                Comments
              </CardTitle>
              <CardText>{comment.comment}</CardText>
              <CardText>-- {comment.author}</CardText>
            </CardBody>
        );
      });

      return(
          <div className="row">
            <Card className="col-lg-5 col-md-5 col-sm-12 m-1">
                <CardImg src={selected.image} />
                  <CardBody>
                      <CardTitle>{selected.name}</CardTitle>
                      <CardText>{selected.description}</CardText>
                  </CardBody>
            </Card>
            <Card className="col-lg-5 col-md-5 col-sm-12 m-1">
              {comments}
            </Card>
          </div>
      );
    } else {
      return(<div></div>);
    }

  }

}

export default Dish;
