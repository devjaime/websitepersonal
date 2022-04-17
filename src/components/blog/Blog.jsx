import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }

  return (
    <>
      <div className="news_list">
        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "https://miro.medium.com/max/934/1*BqSRfLZY2b4wZ6qg1fBTuw.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}
              <div className="details">
                <span>
                Sun, 17 Apr 2022 <a href="https://devjaime.medium.com/introducci%C3%B3n-a-c%C3%B3mo-funciona-kafka-e-implementaci%C3%B3n-usando-python-client-e34b727a472a?source=rss-f764b718a3b4------2"> Post completo aquí</a>
                </span>
                <h3 className="title" onClick={toggleModalOne}>
                 Introducción a cómo funciona Kafka e implementación usando Python-client
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL + "https://miro.medium.com/max/934/1*BqSRfLZY2b4wZ6qg1fBTuw.png"
                            })`,
                          }}
                        ></div>
                      </div>
                      {/* End image */}

                      <div className="details">
                        <span>
                        Sun, 17 Apr 2022 <a href="https://devjaime.medium.com/introducci%C3%B3n-a-c%C3%B3mo-funciona-kafka-e-implementaci%C3%B3n-usando-python-client-e34b727a472a?source=rss-f764b718a3b4------2"> Post completo aquí</a>
                        </span>
                        <h3 className="title" onClick={toggleModalOne}>
                          Resumen
                        </h3>
                      </div>
                      {/* End details */}

                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                          Configure un cliente de Python para Kafka con kafka-python
El uso de datos en tiempo real se ha convertido en el uso comercial recurrente tanto para las empresas como para sus clientes. Sin embargo, uno de los factores clave a tener en cuenta es cómo el caso de uso comercial se basa en sus datos para el uso en tiempo real, es decir, ¿el caso de uso escribe más datos de los que lee, más de lectura que de escritura.
Es por esto que necesariamente se necesita procesar datos en tiempo real y en un enfoque basado en eventos, aquí es donde entra en juego Apache Kafka. Repasaremos qué es Kafka, los conceptos de Kafka, quién lo está usando, cómo configurarlo y cómo usarlo con un cliente Python ( kafka-python) en este tutorial.
¿Qué es Apache Kafka?
Kafka es un sistema de mensajería distribuida de transmisión de eventos que consta de servidores y clientes que se comunican a través del protocolo de red TCP de alto rendimiento.
.
Nota: Kafka se desarrolló en Linkedin, pero ahora se administra bajo la fundación Apache, por lo tanto, Apache Kafka. Me referiré a Apache Kafka como Kafka a lo largo de este tutorial.
                          </p>
                        </div>
                        {/* End description */}
                        <div className="news_share ">
                          <span>Share:</span>
                          <Social />
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                  {/* End box inner */}
                </div>
                {/* End modal box news */}
              </Modal>
              {/* End modal */}
            </div>
          </li>
          {/* End single blog */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "https://miro.medium.com/max/1400/1*JV_1k51Z3PYI-uzU09TDXw.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span>
                 Sat, 16 Apr 2022 <a href="https://devjaime.medium.com/c%C3%B3mo-configuro-mi-entorno-de-desarrollo-en-macos-2022-963b61495275">Post completo aquí</a>
                </span>
                <h3 className="title" onClick={toggleModalTwo}>
                 Cómo configuro mi entorno de desarrollo en macOS (2022)
                </h3>
              </div>
              {/* End details */}

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close modal */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL + "https://miro.medium.com/max/1400/1*JV_1k51Z3PYI-uzU09TDXw.png"
                            })`,
                          }}
                        ></div>
                      </div>
                      {/* End image */}

                      <div className="details">
                        <span>
                        Sat, 16 Apr 2022 <a href="https://devjaime.medium.com/c%C3%B3mo-configuro-mi-entorno-de-desarrollo-en-macos-2022-963b61495275">Post completo aquí</a>
                        </span>
                        <h3 className="title"> Cómo configuro mi entorno de desarrollo en macOS (2022)</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                          Mi stack tecnológico actual
Front-End: HTML, CSS, JavaScript, TypeScript, React, React Native, Redux, Flutter
Back-End: Python, NodeJS, C#, SQL, NoSQL, Docker, Java, Java Spring Boot
                          </p>
                        </div>
                        {/* End description */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              {/* End modal */}
            </div>
            {/* End list inner */}
          </li>
          {/* End single blog */}

          {/* End single blog */}
        </ul>
      </div>
    </>
  );
};

export default Blog;
