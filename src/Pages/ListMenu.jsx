import React from "react";
import { useState } from "react";
import { Container } from "reactstrap";
import Tabs from "../components/Tabs";
import BestFood from "../features/bestFood/BestFood";
import Burger from "../features/burger/Burger";
import Layout from "../Layout";

export default function ListMenu() {
  const [tab, setTab] = useState(0);

  const handleClick = (newVal) => {
    setTab(newVal);
  };
  return (
    <Layout>
      <Container className="mt-5">
        <h1>List Menu</h1>
        <Tabs  tab={tab} handleClick={handleClick} />
        {tab === 0 && <BestFood />}
        {tab === 1 && <Burger />}
      </Container>
    </Layout>
  );
}
