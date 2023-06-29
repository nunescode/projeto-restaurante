import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import styles from "../styles/index.module.css";

const Redes = () => {
  return (
    <>
      <div className="text-center text-white">
        <h4>
          <Image
            className={styles.logo}
            src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente2.png"
          ></Image>{" "}
          Confira o nosso{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://www.instagram.com/espetinho209ld"
          >
            Instagram!{" "}
          </Link>
        </h4>

        <br />
        <h4>
          <Image
            className={styles.logo}
            src="https://logopng.com.br/logos/whatsapp-33.png"
          ></Image>{" "}
          Faça o seu pedido via{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://wa.me/5561982999271"
          >
            Whatsapp!{" "}
          </Link>
        </h4>
      </div>
    </>
  );
};

export default Redes;
