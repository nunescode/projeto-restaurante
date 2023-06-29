import Page from "@/components/Page";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import styles from "../../styles/index.module.css";
import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai";

const index = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/clientes").then((resultado) => {
      setClientes(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir?")) {
      axios.delete("/api/clientes/" + id);
      getAll();
    }
  }
  return (
    <>
      <div className={styles.background}>
        <Page>
          <br />
          <br />
          <Link href="/clientes/form" className="btn btn-success">
            <AiFillPlusCircle /> Adicionar Cliente
          </Link>
          <br />
          <br />
          <Row md={4}>
            {clientes.map((item) => (
              <Col key={item.id}>
                <Card>
                  <Card.Header>
                    <Card.Title className="text-center">
                      <strong>{item.nome}</strong>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      <strong>CPF: </strong>
                      {item.cpf}
                    </p>
                    <p>
                      <strong>Endereço: </strong>
                      {item.cep}
                    </p>
                    <p>
                      <strong>Apartamento: </strong>
                      {item.ap}
                    </p>
                    <p>
                      <strong>Telefone: </strong>
                      {item.telefone}
                    </p>
                    <div className="text-center">
                      <Button
                        className="btn btn-secondary me-2"
                        href={"/clientes/" + item.id}
                      >
                        <BsPencilFill title="Alterar" />
                      </Button>
                      <Button className="btn btn-danger">
                        <BiTrash
                          title="Excluir"
                          onClick={() => excluir(item.id)}
                        />
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

export default index;
