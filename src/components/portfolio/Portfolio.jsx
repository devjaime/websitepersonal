import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
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
          {/* End youtube 1 */}
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
          {/* End youtube 2 */}
          <li>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen3}
              videoId="vTofmxVcbNU"
              onClose={() => setOpen3(false)}
            />
            {/* End Youtube Modal video */}
            <div className="list_inner video" onClick={() => setOpen3(true)}>
              <div className="overlay"></div>
              <img
                className="svg popup"
                src="img/svg/social/youtube.svg"
                alt="socia"
              />
              <div className="title">
                <h3>IOT Angular Dasboard</h3>
                <span>Youtube</span>
              </div>
              <img src="https://i.ytimg.com/vi/vTofmxVcbNU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNrgX69zU-FaXD__HkkC_-0FoDng" alt="Youtube" />
            </div>
          </li>
          {/* End youtube 3 */}
          <li>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen4}
              videoId="RwYpQ3e7zbw"
              onClose={() => setOpen4(false)}
            />
            {/* End Youtube Modal video */}
            <div className="list_inner video" onClick={() => setOpen4(true)}>
              <div className="overlay"></div>
              <img
                className="svg popup"
                src="img/svg/social/youtube.svg"
                alt="socia"
              />
              <div className="title">
                <h3>App Encuestas Flutter</h3>
                <span>Youtube</span>
              </div>
              <img src="https://i.ytimg.com/vi/RwYpQ3e7zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqSr53JZWQwt7JEVM_Kd-zfPru-w" alt="Youtube" />
            </div>
          </li>
          {/* End youtube 4 */}
          <li>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen4}
              videoId="tePBYb_UgCs"
              onClose={() => setOpen4(false)}
            />
            {/* End Youtube Modal video */}
            <div className="list_inner video" onClick={() => setOpen4(true)}>
              <div className="overlay"></div>
              <img
                className="svg popup"
                src="img/svg/social/youtube.svg"
                alt="socia"
              />
              <div className="title">
                <h3>Realidad Virtual con ReactJS</h3>
                <span>Youtube</span>
              </div>
              <img src="https://i.ytimg.com/vi/tePBYb_UgCs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdQ1zY9TCegZY1p_hsLTUcJx2yZA" alt="Youtube" />
            </div>
          </li>
          {/* End youtube 5 */}
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
