import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BiSend, BiTrash } from "react-icons/bi";
import styles from "../../styles/index.module.css";
import Page from "@/components/Page";
import queryString from "query-string";

const carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);

  function getCarrinho() {
    axios.get("/api/carrinho").then((resultado) => {
      setCarrinho(resultado.data);
    });
  }

  useEffect(() => {
    getCarrinho();
  }, [carrinho]);

  function excluir(id) {
    if (confirm("Deseja realmente excluir?")) {
      axios.delete("/api/carrinho/" + id).then(() => {
        getCarrinho();
      });
    }
  }

  function enviarWhatsapp() {
    const numero = "+5561982999271";
    const mensagem = formatarMensagem();

    const url = `https://wa.me/${numero}?${queryString.stringify({
      text: mensagem,
    })}`;

    window.open(url, "_blank");
  }

  function formatarMensagem() {
    let mensagem = "Produtos no Carrinho:\n\n";

    carrinho.forEach((item) => {
      mensagem += `Nome: ${item.nome}\n`;
      mensagem += `Preço: ${item.preco}\n`;
    });

    return mensagem;
  }

  return (
    <>
      <div className={styles.background}>
        <Page>
          <br />
          <br />
          <div className="text-center">
          <h2 className="text-white">Seu Carrinho</h2>
          </div>
          <br />
          <div className="text-center">
            <Button className="btn btn-success" onClick={enviarWhatsapp}>
              <BiSend />    Enviar pedido ao WhatsApp
            </Button>
          </div>
          <br />
          <br />
          <Row md={4}>
            {carrinho.map((item) => (
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
                      <Button
                        className="btn btn-danger"
                        onClick={() => excluir(item.id)}
                      >
                        <BiTrash title="Excluir" />
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

export default carrinho;
