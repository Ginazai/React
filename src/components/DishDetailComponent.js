import React, { Component } from 'react';
import { Card, List, CardImg, CardImgOverlay, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem, Button, 
Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';

const RenderDish = ({ dish }) => {
	return(
		<Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
	);		
}

const RenderComments = ({ comments }) => {
	if (comments != null) {
		const e = comments.map((comment) => {
			var dateFormat = { month: 'short', day: 'numeric', year: 'numeric' };
			var date = new Date(comment.date).toLocaleDateString("en-US", dateFormat);
			return(
			<List key={ comment.id } type="unstyled">
				<li>{comment.comment}</li>
				<li className="p-2">-- {comment.author}, {date}</li>
			</List>
			);
		});
		return(
			<div>
				<h4>Comments</h4>
				{e}
			</div>
			);
	} else {
		return(<div></div>);
	}

}

//CommentForm Component
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
        cname: '',
        comment: '',
        touched: {
            cname: false
        }
    };

    this.toggleModal = this.toggleModal.bind(this);
		this.handleComment = this.handleComment.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);

	}

	toggleModal() {
		this.setState({isModalOpen: !this.state.isModalOpen});
	}

	handleInputChange(event) {
      const target = event.target;
      const name = target.name;

      this.setState({
          [name]: value
      });

    }

	handleComment(values) {
	  alert(JSON.stringify(values));
	}

	handleBlur = (field) => (evt) => {
		
			this.setState({
          touched: {...this.state.touched, [field]: true}
    	});
    	console.log(this.state.touched.cname);
  }

	validate(cname) {
		const errors = {
        cname: '',
    };
    console.log(this.state.touched.cname);

	  if (this.state.touched.cname && cname.length < 3)
	  	errors.cname = 'Name should be >= 3 characters';
	  else if (this.state.touched.cname && cname.length > 15)
	  	errors.cname = 'Name should be <= 15 characters';

    return errors;

  }

	render() {
		const errors = this.validate(this.state.name);

		return(
			<div>
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-edit fa-lg"></span>
					Submit Comment
				</Button>

        	<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
	          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
	          <ModalBody>
	          	<LocalForm onSubmit={(values) => this.handleComment(values)}>

	          				<Row className="form-group">
		          				<Col md={12}>
		                      <Label htmlFor="rating">Your Name</Label>
		                      <Control.select model=".rating" type="select" id="rating" name="rating"
		                      className="form-control"
		                      >
		                        	<option value="1">1</option>
		                        	<option value="2">2</option>
		                        	<option value="3">3</option>
		                        	<option value="4">4</option>
		                        	<option value="5">5</option>
	                        </Control.select>
	                    </Col>
	                  </Row>

	                  <Row className="form-group">
		                  <Col md={12}>
		                      <Label htmlFor="cname">Your Name</Label>

		                      <Control.text model=".cname" id="cname" name="cname"
		                      		placeholder="Name" className="form-control" 
		                          validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} />

		                       <Errors
	                            className="text-danger"
	                            model=".cname"
	                            show="touched"
	                            messages={{
	                                required: 'Required: ',
	                                minLength: 'Must be greater than 2 characters',
	                                maxLength: 'Must be 15 characters or less'}} 
	                          />

	                          <Row className="form-group">
                              <Label htmlFor="comment" md={2}>Comment</Label>
                              <Col md={12}>
                                  <Control.textarea model=".comment" id="comment" name="comment"
                                      rows="12"
                                      className="form-control" />
                              </Col>
                            </Row>

	                    </Col>

	                  </Row>
	                  <Button type="submit"  color="primary">Submit</Button>
	              </LocalForm>
	          </ModalBody>
	      </Modal>

			</div>
			);
	}
}

const DishDetail = (props) => {
	var dish = props.dish;
	var comments = props.comments;

	if (dish != null) {
		return(
			 <div className="container">
			 	<div className="row">
			 		<Breadcrumb>
			 			<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
			 			<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
			 			<BreadcrumbItem active>{dish.name}</BreadcrumbItem>
			 		</Breadcrumb>
			 		<div className="col-12">
			 			<h3>{dish.name}</h3>
			 			<hr />
			 		</div>
			 	</div>
				 <div className="row">
				 	<div className="col-6 col-sm-5">
					 	<Card>
					 		<RenderDish dish={dish}  />
					 	</Card>	
					 </div>
					 <div className="col-6 col-sm-5">
					 	<RenderComments comments={comments} />
					 	<CommentForm />
					 </div>
				 </div>
		    </div>
	    );
	} else {
		return(<div></div>);
	}
}
export default DishDetail;