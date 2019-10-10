import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const NasaCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
        </CardBody>
        <div className = "imgContainer">
        <img className= "img" width="100%" src={props.image} alt="Card image cap" />
        </div>
        <CardBody>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default NasaCard;




