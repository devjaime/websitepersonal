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
              <img src="https://i.ytimg.com/vi/LJ5LRPdqChE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu1NsDWV9YdH75kAZXCSAlRIVsiw" alt="Youtube" />
            </div>
          </li>
          {/* End youtube */}
          <li>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen2}
              videoId="c02KviQGgWA"
              onClose={() => setOpen2(false)}
            />
            {/* End Youtube Modal video */}
            <div className="list_inner video" onClick={() => setOpen2(true)}>
              <div className="overlay"></div>
              <img
                className="svg popup"
                src="img/svg/social/youtube.svg"
                alt="socia"
              />
              <div className="title">
                <h3>Chat Bot IA  Real Time</h3>
                <span>Youtube</span>
              </div>
              <img src="https://i.ytimg.com/vi/c02KviQGgWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMIuR5F8NXIt30gDzgpovGXBKtQw" alt="Youtube" />
            </div>
          </li>
          {/* End youtube */}
          


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
          </SRLWrapper>
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
