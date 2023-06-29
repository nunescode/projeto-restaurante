import Page from "@/components/Page";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsCart, BsPencilFill, BsPlusSquareFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import Link from "next/link";
import styles from "../../styles/index.module.css";

const Index = () => {
  const [espetinhos, setEspetinhos] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/espetinhos").then((resultado) => {
      setEspetinhos(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir?")) {
      axios.delete("/api/espetinhos/" + id);
      getAll();
    }
  }

  const adicionarAoCarrinho = async (item) => {
    try {
      const response = await axios.post("/api/carrinho", item);
      console.log("Espetinho adicionado ao carrinho:", response.data);
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };

  const adicionarAoCarrinhoUm = (item) => {
    const popupWindow = window.open("", "popupWindow", "width=400,height=300");
    popupWindow.document.write(`
      <html>
      <head>
        <title>Pop-up</title>
        <style>
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            margin: 0;
            font-family: Arial, sans-serif;
          }
  
          .message {
            text-align: center;
            padding: 20px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="message">
          <h3>Item adicionado ao carrinho!</h3>
          <p>${item.nome}</p>
          <p>Preço: ${item.preco}</p>
        </div>
      </body>
      </html>
    `);
    popupWindow.document.close();
  };
  

  return (
    <>
      <div className={styles.background}>
        <Page>
          <br />
          <br />
          <Link href="/espetinhos/form" className="btn btn-success">
            <BsPlusSquareFill /> Adicionar Espetinho
          </Link>
          <br />
          <br />
          <Row md={4}>
            {espetinhos.map((item) => (
              <Col key={item.id}>
                <Card>
                  <Card.Img variant="top" src={item.urlFoto}></Card.Img>
                  <Card.Header>
                    <Card.Title className="text-center">
                      <strong>{item.nome}</strong>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      <strong>Preço: </strong>
                      {item.preco}
                    </p>
                    <p>
                      <strong>Descrição: </strong>
                      {item.descricao}
                    </p>
                    <p>
                      <strong>Estoque: </strong>
                      {item.estoque}
                    </p>
                    <div className="text-center">
                      <Link
                        href={`/espetinhos/${item.id}`}
                        className="btn btn-secondary me-2"
                      >
                        <BsPencilFill title="Alterar" />
                      </Link>
                      <Button className="btn btn-danger">
                        <BiTrash
                          title="Excluir"
                          onClick={() => excluir(item.id)}
                        />
                      </Button>
                      <br/>
                      <br/>
                      <Button
                        className="btn btn-success"
                        onClick={() =>  {
                          adicionarAoCarrinho(item);
                          adicionarAoCarrinhoUm(item);
                        }}
                      >
                        <BsCart className="me-2" />
                        Adicionar ao Carrinho
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Page>
      </div>
    </>
  );
};

export default Index;
