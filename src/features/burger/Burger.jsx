import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner } from "reactstrap";
import CardFood from "../../components/Card";
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
    return <Spinner>Loading...</Spinner>;
  }

  return (
    <>
      <Container>
        <Row className="gy-3">
          {data.map((item, i) => (
            <Col xs="6" md="4" lg="3" key={i}>
              <CardFood data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
