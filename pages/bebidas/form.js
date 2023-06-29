import Page from "@/components/Page";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsCheckCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from "../../styles/index.module.css";
import ebpValidator from "@/validators/ebpValidator";
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
    axios.post("/api/bebidas", dados);
    push("/bebidas");
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
          <Form className="text-white">
            <br />
            <br />
            <Form.Group className="mb-3 text-white" controlId="urlFoto">
              <Form.Label>
                <strong>Foto:</strong>
              </Form.Label>
              <Form.Control
                isInvalid={errors.nome}
                type="text"
                placeholder="Insira a URL da foto..."
                {...register("urlFoto", ebpValidator.nome)}
              />
              {errors.nome && (
                <span className="error-message bg-danger text-white">
                  {errors.nome.message}
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>
                <strong>Nome:</strong>
              </Form.Label>
              <Form.Control
                isInvalid={errors.nome}
                type="text"
                placeholder="Insira o nome..."
                {...register("nome", ebpValidator.nome)}
              />
              {errors.nome && (
                <span className="error-message bg-danger text-white">
                  {errors.nome.message}
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="preco">
              <Form.Label>
                <strong>Preço:</strong>
              </Form.Label>
              <Form.Control
                isInvalid={errors.preco}
                mask="R$99,99"
                type="text"
                placeholder="Insira o preço..."
                {...register("preco", ebpValidator.preco)}
                onChange={handleChange}
              />
              {errors.preco && (
                <span className="error-message bg-danger text-white">
                  {errors.preco.message}
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>
                <strong>Descrição:</strong>
              </Form.Label>
              <Form.Control
                isInvalid={errors.descricao}
                type="text"
                placeholder="Insira o descrição..."
                {...register("descricao", ebpValidator.descricao)}
              />
              {errors.descricao && (
                <span className="error-message bg-danger text-white">
                  {errors.descricao.message}
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="estoque">
              <Form.Label>
                <strong>Estoque:</strong>
              </Form.Label>
              <Form.Control
                isInvalid={errors.estoque}
                type="text"
                placeholder="Insira o estoque..."
                {...register("estoque", ebpValidator.estoque)}
              />
              {errors.estoque && (
                <span className="error-message bg-danger text-white">
                  {errors.estoque.message}
                </span>
              )}
            </Form.Group>
            <div className="text-center">
              <Button
                variant="success"
                type="submit"
                onClick={handleSubmit(salvar)}
              >
                <BsCheckCircleFill className="me-2" />
                Salvar
              </Button>
              <Link className="ms-2 btn btn-danger" href="/bebidas">
                <BsFillArrowLeftCircleFill className="me-2" />
                Voltar
              </Link>
            </div>
          </Form>
        </Page>
      </div>
    </>
  );
};

export default form;
