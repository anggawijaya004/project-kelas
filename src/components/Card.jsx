import React from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

export default function CardFood({ data }) {
  return (
    <Card
    >
      <img alt="Sample" src={data.img} />
      <CardBody>
        <CardTitle tag="h5">{data.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Price : $ {data.price}
        </CardSubtitle>
        <CardText>{data.dsc}</CardText>
      </CardBody>
    </Card>
  );
}
