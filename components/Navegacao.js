import React from "react";
import styles from "../styles/Navegacao.module.css";
import Link from "next/link";

const Navegacao = () => {
  return (
    <>
      <div>
        <Link className={styles.bread} href="/">
          Página inicial /{" "}
        </Link>
        <Link className={styles.bread} href="/funcionarios">
          Funcionários /{" "}
        </Link>
        <Link className={styles.bread} href="/clientes">
          Clientes /{" "}
        </Link>
        <Link className={styles.bread} href="/about">
          Sobre Nós
        </Link>
      </div>
    </>
  );
};

export default Navegacao;
