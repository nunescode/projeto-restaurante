import Page from "@/components/Page";
import React from "react";
import styles from "../styles/index.module.css";

const location = () => {
  return (
    <>
      <div className={styles.background}>
        <Page>
          <div className="text-center text-white">
            <h2>Estamos localizados no:</h2>
            <h3>Cruzeiro Novo</h3>
            <h5>Bloco C, Loja 15 - DF, 70650-293</h5>
          </div>
          <div className="text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.183915445039!2d-47.94469132613439!3d-15.794253484846095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31f41cb70cd1%3A0x7ce2a9ca595f29fb!2sEspetinho%20209%20-%20Cruzeiro%20Novo!5e0!3m2!1spt-BR!2sbr!4v1687979249168!5m2!1spt-BR!2sbr"
              width="800"
              height="600"
              allowfullscreen="..."
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Page>
      </div>
    </>
  );
};

export default location;
