import React, { Component } from 'react';
import { Card, List, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class DishDetail extends Component {
	constructor(props){
		super(props);
	}

	renderDish = (dish) => {
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

	renderComments = (c) => {
		if (c != null) {
			const e = c.map((h) => {
				var dateFormat = { month: 'short', day: 'numeric', year: 'numeric' };
				var date = new Date(h.date).toLocaleDateString("en-US", dateFormat);

				return(
				<List key={ h.id } type="unstyled">
					<li>{h.comment}</li>
					<li>-- {h.author}, {date}</li>
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

	render() {
		let dish = this.props.dish;

		if (dish != null) {
			return(
				 <div className="container">
					 <div className="row">
					 	<div className="col-12 col-sm-5 m-1">
						 	<Card>
						 		{ this.renderDish(dish) }
						 	</Card>	
						 </div>
						 { this.renderComments(dish.comments) }
					 </div>
			    </div>
		    );
		} else {
			return(<div></div>);
		}

	}
}

export default DishDetail;