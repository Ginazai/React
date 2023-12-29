import React, { Component } from 'react';
import { Card, List, CardImg, CardImgOverlay, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
			console.log(comment);

			return(
			<List key={ comment.id } type="unstyled">
				<li>{comment.comment}</li>
				<li>-- {comment.author}, {date}</li>
			</List>
			);
		});
		return(
			<div className="col-12 col-sm-5 m-1">
				<h4>Comments</h4>
				{e}
			</div>
			);
	} else {
		return(<div></div>);
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
				 <div className="row justify-content-center">
				 	<div className="col-12 col-sm-5 m-1">
					 	<Card>
					 		<RenderDish dish={dish}  />
					 	</Card>	
					 </div>
					 <RenderComments comments={comments} />
				 </div>
		    </div>
	    );
	} else {
		return(<div></div>);
	}
}
export default DishDetail;