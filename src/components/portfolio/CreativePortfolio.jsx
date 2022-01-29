import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CreativePortfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <Tabs>
          <TabList className="creative-portfolio-list">
            <Tab>All</Tab>
            <Tab>Vimeo</Tab>
            <Tab>Youtube</Tab>
            <Tab>Photography</Tab>
          </TabList>
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="instagram"
                autoplay
                isOpen={isOpen}
                videoId="CVUP1LiD00-"
                onClose={() => setOpen(false)}
              />
              {/* End Youtube Modal video */}

              <ModalVideo
                channel="vimeo"
                autoplay
                isOpen={isOpen2}
                videoId="100171151"
                onClose={() => setOpen2(false)}
              />
              {/* End Youtube Modal video */}

              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner video" onClick={() => setOpen(true)}>
                  <div className="overlay"></div>
                  <img
                    className="svg popup"
                    src="img/svg/social/youtube.svg"
                    alt="socia"
                  />
                  <div className="title">
                    <h3>Aura Dione </h3>
                    <span>Youtube</span>
                  </div>
                  <img src="img/portfolio/3.jpg" alt="Youtube" />
                </div>
              </li>
              {/* End youtube */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div
                  className="list_inner video"
                  onClick={() => setOpen2(true)}
                >
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
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
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
                  <div
                    className="list_inner"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
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

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
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

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
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
          </TabPanel>
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="vimeo"
                autoplay
                isOpen={isOpen2}
                videoId="100171151"
                onClose={() => setOpen2(false)}
              />
              {/* End Youtube Modal video */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div
                  className="list_inner video"
                  onClick={() => setOpen2(true)}
                >
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
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="1gyTUHP6ne8"
                onClose={() => setOpen(false)}
              />
              {/* End Youtube Modal video */}

              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner video" onClick={() => setOpen(true)}>
                  <div className="overlay"></div>
                  <img
                    className="svg popup"
                    src="img/svg/social/youtube.svg"
                    alt="socia"
                  />
                  <div className="title">
                    <h3>Aura Dione </h3>
                    <span>Youtube</span>
                  </div>
                  <img src="img/portfolio/3.jpg" alt="Youtube" />
                </div>
              </li>
              {/* End youtube */}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="gallery_zoom">
              <SRLWrapper>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
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
                  <div
                    className="list_inner"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
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

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
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

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
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
          </TabPanel>
        </Tabs>
        {/* END TABLIST */}
      </div>
    </SimpleReactLightbox>
  );
};

export default CreativePortfolio;
