import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <li>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="LJ5LRPdqChE"
              onClose={() => setOpen(false)}
            />
            {/* End Youtube Modal video */}
            <div className="list_inner video" onClick={() => setOpen(true)}>
              <div className="overlay"></div>
              <img
                className="svg popup"
                src="img/svg/social/youtube.svg"
                alt="socia"
              />
              <div className="title">
                <h3>Bot python discord </h3>
                <span>Youtube</span>
              </div>
              <img src="img/portfolio/3.jpg" alt="Youtube" />
            </div>
          </li>
          {/* End youtube */}
          <li>
            <ModalVideo
              channel="vimeo"
              autoplay
              isOpen={isOpen2}
              videoId="100171151"
              onClose={() => setOpen2(false)}
            />
            {/* End Youtube Modal video */}
            <div className="list_inner video" onClick={() => setOpen2(true)}>
              <div className="overlay"></div>
              <img
                className="svg popup"
                src="img/svg/social/vimeo.svg"
                alt="socia"
              />
              <div className="title">
                <h3>Aura Dione </h3>
                <span>Vimeo</span>
              </div>
              <img src="img/portfolio/2.jpg" alt="Vimeo" />
            </div>
          </li>
          {/* End vimeo */}

          <SRLWrapper>
            <li>
              <div className="list_inner">
                <div className="overlay"></div>
                <img className="svg" src="img/svg/zoom.svg" alt="" />
                <div className="title">
                  <h3>Ave Simone</h3>
                  <span>Shoot</span>
                </div>

                <a href="img/portfolio/1.jpg">
                  <img src="img/portfolio/1.jpg" alt="Light Photography" />
                </a>
              </div>
            </li>
            {/* End image popup */}
            <li>
              <div className="list_inner">
                <div className="overlay"></div>
                <img className="svg" src="img/svg/zoom.svg" alt="socia" />
                <div className="title">
                  <h3>Kelly Smith</h3>
                  <span>Shoot</span>
                </div>

                <a href="img/portfolio/4.jpg">
                  <img src="img/portfolio/4.jpg" alt="Cinema Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}
            <li>
              <div className="list_inner">
                <div className="overlay"></div>
                <img className="svg" src="img/svg/zoom.svg" alt="socia" />
                <div className="title">
                  <h3>Duru Sweet</h3>
                  <span>Shoot</span>
                </div>

                <a href="img/portfolio/5.jpg">
                  <img src="img/portfolio/5.jpg" alt="Best Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}
            <li>
              <div className="list_inner">
                <div className="overlay"></div>
                <img className="svg" src="img/svg/zoom.svg" alt="socia" />
                <div className="title">
                  <h3>Lisa Kotlins</h3>
                  <span>Shoot</span>
                </div>

                <a href="img/portfolio/6.jpg">
                  <img src="img/portfolio/6.jpg" alt="Light Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}
          </SRLWrapper>
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
