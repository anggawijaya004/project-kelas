import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CardFood from "../../components/CardFood";
import { getBurger } from "./burgerSlice";

export default function Burger() {
  const { status, data } = useSelector((state) => state.burger);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getBurger());
    }
  }, [status]);

  if (status === "loading") {
    return <div>loading . . .</div>;
  }

  return (
    <Container>
      <Row>
        {data.map((item, i) => (
          <Col key={i} xs="6" md="4" lg="3">
            <CardFood item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
