import React, { useEffect, useState } from "react";
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
    setValue,
    formState: { errors },
  } = useForm();

  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);
    axios.post("/api/funcionarios", dados);
    push("/funcionarios");
  }

  function handleChange(event) {
    const name = event.target.name;
    const valor = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(valor, mascara));
  }

  return (
    <>
      <div className={styles.background} >
        <Page titulo="Cadastrar Funcionário">
          <br />
          <br />
          <Form className="text-white">
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="nome">
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

                <Form.Group className="mb-3" controlId="cpf">
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

                <Form.Group className="mb-3" controlId="endereco">
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

                <Form.Group className="mb-3" controlId="cargo">
                  <Form.Label>
                    <strong>Cargo:</strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.nome}
                    type="text"
                    placeholder="Insira o cargo..."
                    {...register("cargo", cfValidator.nome)}
                  />
                  {errors.nome && (
                    <span className="error-message bg-danger text-white">
                      {errors.nome.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                  <Form.Label>
                    <strong>Telefone:</strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.telefone}
                    mask="(99) 9 9999-9999"
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
                  href="/funcionarios"
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
