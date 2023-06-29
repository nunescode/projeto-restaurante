import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import styles from "../styles/index.module.css";
import Navegacao from "./Navegacao";

const Page = (props) => {
  return (
    <>
      <Header />
      <Container>
        <br/>
        <Navegacao />
      </Container>
      <Container className="mb-5 pb-4">{props.children}</Container>
    </>
  );
};

export default Page;
