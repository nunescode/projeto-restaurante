import Page from "@/components/Page";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import Link from "next/link";
import styles from "../../styles/index.module.css";

const index = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/funcionarios").then((resultado) => {
      setFuncionarios(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir?")) {
      axios.delete("/api/funcionarios/" + id);
      getAll();
    }
  }
  return (
    <>
      <div className={styles.background}>
        <Page>
          <br />
          <br />
          <Link href="/funcionarios/form" className="btn btn-success">
            <AiFillPlusCircle /> Adicionar Funcionário
          </Link>
          <br />
          <br />
          <Row md={4}>
            {funcionarios.map((item) => (
              <Col key={item.id}>
                <Card>
                  <Card.Header>
                    <Card.Title className="text-center">
                      <strong>{item.nome}</strong>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      <strong>Cargo: </strong>
                      {item.cargo}
                    </p>
                    <p>
                      <strong>Telefone: </strong>
                      {item.telefone}
                    </p>
                    <div className="text-center">
                      <Button
                        className="btn btn-secondary me-2"
                        href={"/funcionarios/" + item.id}
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
