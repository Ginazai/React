import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function Home({dish, promotion, leader}){

  return(
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m1">
          <RenderCard item={dish}/>
        </div>
        <div className="col-12 col-md m1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
}

function RenderCard({item}){
  return(
    <Card className="">
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}
export default Home;
