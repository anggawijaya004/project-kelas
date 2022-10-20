import React from "react";
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";

export default function CardFood({ item }) {
  return (
    <Card>
      <img alt="Sample" src={item.img} />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Pice : $ {item.price}
        </CardSubtitle>
        <CardText>{item.dsc} </CardText>
      </CardBody>
    </Card>
  );
}
