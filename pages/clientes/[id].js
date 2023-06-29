import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";
import axios from "axios";
import Page from "@/components/Page";
import styles from "../../styles/index.module.css"
import cfValidator from "@/validators/cfValidator";
import { mask } from "remask";

const form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { push, query } = useRouter();  

  useEffect(() => {
    if (query.id) {
      axios.get("/api/clientes/" + query.id).then((resultado) => {
        console.log(resultado.data);
        const cliente = resultado.data;
        for (let atributo in cliente) {
          setValue(atributo, cliente[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put("/api/clientes/" + query.id, dados);
    push("/clientes");
  }

  function handleChange(event) {
    const name = event.target.name;
    const valor = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(valor, mascara));
  }


  return (
    <>
      <div className={styles.background}>
        <Page>
          <br/>
          <br/>
          <Form className="text-white">
            <Row>
              <Col>
                <Form.Group className="mb-3 " controlId="nome">
                  <Form.Label>
                    <strong>Nome:</strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.nome}
                    type="text"
                    placeholder="Insira o nome..."
                    {...register("nome", cfValidator.nome)}
                  />
                  {errors.nome && (
                    <span className="error-message bg-danger text-white">
                      {errors.nome.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="cpf">
                  <Form.Label>
                    <strong>CPF:</strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.cpf}
                    mask="999.999.999-99"
                    type="text"
                    placeholder="Insira o CPF..."
                    {...register("cpf", cfValidator.cpf)}
                    onChange={handleChange}
                  />
                  {errors.cpf && (
                    <span className="error-message bg-danger text-white">
                      {errors.cpf.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="endereco">
                  <Form.Label>
                    <strong>Endereço:</strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.nome}
                    type="text"
                    placeholder="Insira o endereço..."
                    {...register("endereco", cfValidator.nome)}
                  />
                  {errors.nome && (
                    <span className="error-message bg-danger text-white">
                      {errors.nome.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="ap">
                  <Form.Label>
                    <strong>Apartamento:</strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.apartamento}
                    type="text"
                    placeholder="Insira o número do apartamento..."
                    {...register("ap", cfValidator.apartamento)}
                  />
                  {errors.apartamento && (
                    <span className="error-message bg-danger text-white">
                      {errors.apartamento.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="telefone">
                  <Form.Label>
                    <strong>Telefone:</strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.telefone}
                    mask="(61) 9 9999-9999"
                    type="text"
                    placeholder="Insira o telefone..."
                    {...register("telefone", cfValidator.telefone)}
                    onChange={handleChange}
                  />
                  {errors.telefone && (
                    <span className="error-message bg-danger text-white">
                      {errors.telefone.message}
                    </span>
                  )}
                </Form.Group>
              </Col>
              <div className="text-center">
                <Button
                  className="ms-2 btn btn-success"
                  type="submit"
                  onClick={handleSubmit(salvar)}
                >
                  <BiSend className="me-2" /> Salvar
                </Button>
                <Link
                  href="/clientes"
                  className="ms-2 btn btn-danger"
                  type="submit"
                >
                  <BiArrowBack className="me-2" /> Voltar
                </Link>
              </div>
            </Row>
          </Form>
        </Page>
      </div>
    </>
  );
};

export default form;
