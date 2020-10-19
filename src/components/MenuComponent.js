import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderMenuItem = ({dish, onClick}) => {
  return(
      <Card className="col-lg-5 col-md-5 m-1"
         onClick={() => onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
  );
}


const Menu = ({dishes, onClick}) => {
  const menu = dishes.map((dish) => {
    return(
      <RenderMenuItem key={dish.id} dish={dish} onClick={onClick} />
    );
  });

  return(
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

 export default Menu;
