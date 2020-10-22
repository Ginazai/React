import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderMenuItem = ({dish}) => {
  return(
      <Card className="col-lg-5 col-md-5 m-1">
        <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
      </Card>
  );
}


const Menu = ({dishes }) => {
  const menu = dishes.map((dish) => {
    return(
      <RenderMenuItem key={dish.id} dish={dish} />
    );
  });

  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr/>
          </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

 export default Menu;
