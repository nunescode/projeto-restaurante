import Page from "@/components/Page";
import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import styles from "../styles/index.module.css";
import { SiGooglemaps, SiIfood } from "react-icons/si";
import Link from "next/link";
import Redes from "@/components/Redes";

const index = () => {
  return (
    <>
      <div className={styles.background}>
        <Page titulo="Bem-Vindo">
          <br />
          <Redes></Redes>
          <br/>
          <div className="text-center text-white">
            <h2>
              <strong>
                Seja bem-vindo ao Espetinho 209, um restaurante especializado em
                espetinhos saborosos que certamente irão satisfazer seu paladar.
                Nosso estabelecimento tem como objetivo proporcionar uma
                experiência gastronômica única, onde os espetinhos são as
                estrelas do cardápio.
              </strong>
            </h2>
            <br />
            <h3>
              <SiIfood className={styles.ifood} /> Avaliação no iFood: 4.7
              <br />
              <SiGooglemaps className={styles.maps} /> Avaliação no Google Maps:
              4.8
            </h3>
          </div>
          <br />
          <div>
            <Row md={4}>
              <Col>
                <Card>
                  <Card.Header className="text-center">
                    <Image
                      variant="top"
                      className=""
                      src="https://lh3.googleusercontent.com/a-/AD_cMMRWAK9WooEintzXINnikKxUYpGX4qk79Hzbjeq_siYAveka=w60-h60-p-rp-mo-ba4-br100"
                    />
                  </Card.Header>
                  <Card.Body className={styles.p}>
                    <Card.Title className="text-center">
                      <strong>Leonny Dalmaso</strong>
                    </Card.Title>
                    <p>
                      <strong>
                        Nota:{" "}
                        <img
                          className={styles.star}
                          src="https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
                        ></img>
                      </strong>
                    </p>
                    <p className={styles.p}>
                      Local bacana demais! Comida deliciosa; atendimento nota
                      10! Um lugar maravilhoso dentro de Brasília! Vale a pena
                      conhecer! Simples, porém, tudo muito perfeito, comida
                      saborosíssima; atendimento de alto nível, tudo muito
                      acolhedor! Garçom William super gentil!! Obrigado! Sucesso
                      à todos!
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Header className="text-center">
                    <Image
                      variant="top"
                      className=""
                      src="https://lh3.googleusercontent.com/a-/AD_cMMR_iWlLm5fq3S-FWZP_58gqclMjgHJxgfORd0SX-w=w60-h60-p-rp-mo-ba4-br100"
                    />
                  </Card.Header>
                  <Card.Body className={styles.p}>
                    <Card.Title className="text-center">
                      <strong>Tathyelly S.</strong>
                    </Card.Title>
                    <p>
                      <strong>
                        Nota:{" "}
                        <img
                          className={styles.star}
                          src="https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
                        ></img>
                      </strong>
                    </p>
                    <p>
                      Sou cliente fiel. A comida é muito bem temperada e a
                      apresentação dos pratos é incrível. Sou apaixonada mesmo é
                      pela parmegiana. Só peçam e não vão se arrepender. O
                      Leandro é o dono, sempre muito simpático e prestativo.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Header className="text-center">
                    <Image
                      variant="top"
                      className=""
                      src="https://lh3.googleusercontent.com/a-/AD_cMMSe41HUiuQ4NmjbPr5Dci5eEBPbw9R_3as5SkCktOQ=w60-h60-p-rp-mo-ba4-br100"
                    />
                  </Card.Header>
                  <Card.Body className={styles.p}>
                    <Card.Title className="text-center">
                      <strong>Nadia Monteiro</strong>
                    </Card.Title>
                    <p>
                      <strong>
                        Nota:{" "}
                        <img
                          className={styles.star}
                          src="https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
                        ></img>
                      </strong>
                    </p>
                    <p>
                      Minha experiência neste lugar,foi ótimo,o dono bem
                      atencioso,os funcionários super prestativos,um ambiente
                      muito agradável,eu me sentir super bem recepcionada,eu
                      super recomendo esse ambiente, muito familiar.👏🏼👏🏼❤️
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Header className="text-center">
                    <Image
                      variant="top"
                      src="https://lh3.googleusercontent.com/a-/AD_cMMQPIKQvp6-phy1A_0znT0j1OmRdbH0Nz1h7yUazOcw=w60-h60-p-rp-mo-ba3-br100"
                    />
                  </Card.Header>
                  <Card.Body className={styles.p}>
                    <Card.Title className="text-center">
                      <strong>Fábio Diniz</strong>
                    </Card.Title>
                    <p>
                      <strong>Nota: </strong>
                      <img
                        className={styles.star}
                        src="https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
                      ></img>
                    </p>
                    <p>
                      Já sou cliente há muito tempo, bom demais! Mandam muito
                      bem e têm um atendimento muito bom. Vale a pena demais
                      pelo preço e pela qualidade da comida! Tudo de primeira
                      qualidade. Recomendo o espetinho de angus, carne muito
                      macia e quase sem gordura. Outra opção incrível é o filé
                      de Ancho, uma verdadeira delícia.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Page>
      </div>
    </>
  );
};

export default index;
