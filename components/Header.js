import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiFoodMenu, BiDrink, BiBowlHot, BiMap, BiInfoCircle } from "react-icons/bi"
import styles from "../styles/Header.module.css"
import Link from "next/link";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Navbar className={styles.navheader}>
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Image className={styles.logo} src='https://i.imgur.com/ukCBlaC.png'></Image>
          <div>
          <Nav className="ms-auto">
            <Nav.Link className={styles.nav} href="/espetinhos"><BiFoodMenu/>  Espetinhos</Nav.Link>
            <Nav.Link className={styles.nav} href="/bebidas"><BiDrink/>   Bebidas</Nav.Link>
            <Nav.Link className={styles.nav} href="/porcoes"><BiBowlHot/>  Porções</Nav.Link>
            <Nav.Link className={styles.nav} href="/carrinho"><BsCart/>   Carrinho</Nav.Link>
            <Nav.Link className={styles.nav} href="/location"><BiMap/>   Localização</Nav.Link>
            <Nav.Link className={styles.nav} href="/about"><BiInfoCircle/>   Sobre Nós</Nav.Link>
            
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
