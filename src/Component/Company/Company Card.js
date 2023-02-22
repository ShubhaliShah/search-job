import React from "react";
import Style from './CompanyCard.module.css'
import Carousel from 'better-react-carousel'

function CompanyCard() {
  return (
   
    <div className={Style.CompanyCardBackground}>
      <div className={Style.Leftsection}>
        <img
          src="https://static.naukimg.com/s/0/0/i/role-collection.png"
          alt="logo"
        />
        <p className={Style.Heading}> Discover jobs across popular roles </p>
        <p className={Style.SubHeading}>
          Select a role and we'll show you relevant jobs for it!
        </p>
      </div>
      <div className={Style.carousel}>
        <Carousel cols={2} rows={3} gap={10} loop>
          <Carousel.Item>
            <div className={Style.Cards}>
              <h5 className={Style.Text}>Full Stack Developer</h5>
              <div className={Style.CardContent}>
                <span>23.9k+ Jobs</span>
                <sub>
                  <img
                    className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Front End Developer</h5>
              <div className={Style.CardContent}>
                <span>28.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Engineering Manager</h5>
              <div className={Style.CardContent}>
                <span>80.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Technical Lead</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Mobile/App Developer</h5>
              <div className={Style.CardContent}>
                <span>67.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Cyber Security</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Business Analyst</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Chattered Acountant</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Product Manager</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Branch Manager</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                      className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={Style.Cards}>
              <h5  className={Style.Text}>Backend Developer</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={Style.Cards}>
              <h5   className={Style.Text}>UI/UX Designer</h5>
              <div className={Style.CardContent}>
                <span>20.9k+ Jobs</span>
                <sub>
                  <img
                     className={Style.Img}
                    src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                    alt="Logo"
                  />
                </sub>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    
  )
}

export default CompanyCard
