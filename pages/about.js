import Page from "@/components/Page";
import React from "react";
import styles from "../styles/index.module.css";
import Redes from "@/components/Redes";

const about = () => {
  return (
    <>
      <div className={styles.background}>
        <Page>
          <br />
          <div className="text-center text-white">
            <h1>Sobre Nós</h1>
            <h5>
              Venha nos visitar e desfrute de uma refeição saborosa e memorável
              no Espetinho 209!
            </h5>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Vv9YO8lQybU"
                title="Vídeo Sobre Nós"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Redes />
        </Page>
      </div>
    </>
  );
};

export default about;
