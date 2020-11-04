import { debounce, get } from 'lodash'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import cContactWhats from "../img/c-contact-whats.svg";
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/LayoutLandingPage'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const IndexPageTemplate = ({
  whatIsTherapy,
  typesOfTherapy,
  forWho,
  aboutBarbara,
  contact,
}) => {
  let [currentSlide, setCurrentSlide] = useState(0);
  let [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const verifyIsMobile = debounce(() => {
      setIsMobile(!window.matchMedia('max-width: 768px').matches);
    }, 100);

    verifyIsMobile();

    window.addEventListener('resize', verifyIsMobile);
    return () => {
       window.removeEventListener('resize', verifyIsMobile);
    }
  }, []);

  return (
    <main>
      <section className="c-what-is-therapy">
        <div className="c-container">
          <h2>{whatIsTherapy.title}</h2>
  
          <p>{whatIsTherapy.body}</p>
        </div>
      </section>
  
      <section className="c-types-of-therapy">
        <div className="c-container">
          <CarouselProvider
            naturalSlideWidth={isMobile ? 327 : 1110}
            naturalSlideHeight={isMobile ? 1150 : 411}
            totalSlides={3}
          >
            <div class="c-slides">
              <Slider>
                <Slide index={0}>
                  <div className="c-slide">
                    <div className="c-slide-image">
                      <img src={get(typesOfTherapy, 'image1.childImageSharp.fluid.src', '')} alt={typesOfTherapy.image1alt} />
                    </div>
                    <div className="c-slide-body">
                      <h3>{typesOfTherapy.title1}</h3>
                      <p>{typesOfTherapy.body1}</p>
                    </div>
                  </div>
                </Slide>
  
                <Slide index={1}>
                  <div className="c-slide">
                    <div className="c-slide-image">
                      <img src={get(typesOfTherapy, 'image2.childImageSharp.fluid.src', '')} alt={typesOfTherapy.image2alt} />
                    </div>
                    <div className="c-slide-body">
                      <h3>{typesOfTherapy.title2}</h3>
                      <p>{typesOfTherapy.body2}</p>
                    </div>
                  </div>
                </Slide>
  
                <Slide index={2}>
                  <div className="c-slide">
                    <div className="c-slide-image">
                      <img src={get(typesOfTherapy, 'image3.childImageSharp.fluid.src', '')} alt={typesOfTherapy.image3alt} />
                    </div>
                    <div className="c-slide-body">
                      <h3>{typesOfTherapy.title3}</h3>
                      <p>{typesOfTherapy.body3}</p>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </div>
  
            <div className="c-slides-nav">
              <nav>
                <Dot slide={0} onClick={() => setCurrentSlide(0)}>
                  <FontAwesomeIcon icon={currentSlide === 0 ? faCircleSolid : faCircleRegular} />
                </Dot>
                <Dot slide={1} onClick={() => setCurrentSlide(1)}>
                  <FontAwesomeIcon icon={currentSlide === 1 ? faCircleSolid : faCircleRegular} />
                </Dot>
                <Dot slide={2} onClick={() => setCurrentSlide(2)}>
                  <FontAwesomeIcon icon={currentSlide === 2 ? faCircleSolid : faCircleRegular} />
                </Dot>
              </nav>
            </div>
          </CarouselProvider>
        </div>
      </section>
  
      <section className="c-for-who">
        <div className="c-container">
          <h2>{forWho.title}</h2>
  
          <div className="c-for-who__types">
            <div className="c-for-who__type">
              <img src={get(forWho, 'types.individual.image.childImageSharp.fluid.src', '')} alt={forWho.types.individual.imgAlt}/>
  
              <h3>{forWho.types.individual.title}</h3>
  
              <p>{forWho.types.individual.body}</p>
  
              <Link to={forWho.types.individual.url}>{forWho.buttonLabel}</Link>
            </div>
  
            <div className="c-for-who__type">
              <img src={get(forWho, 'types.couple.image.childImageSharp.fluid.src', '')} alt={forWho.types.couple.imgAlt}/>
  
              <h3>{forWho.types.couple.title}</h3>
  
              <p>{forWho.types.couple.body}</p>
  
              <Link to={forWho.types.couple.url}>{forWho.buttonLabel}</Link>
            </div>
          </div>
        </div>
      </section>
  
      <section className="c-about-barbara">
        <div className="c-container">
          <h2>{aboutBarbara.title}</h2>
  
          <div className="c-columns">
            <div className="c-about">
              <p>{aboutBarbara.body}</p>
  
              <Link to={aboutBarbara.url}>{aboutBarbara.buttonLabel}</Link>
            </div>
            <div className="c-photo">
              <img src={get(aboutBarbara, 'image.childImageSharp.fluid.src', '')} alt={aboutBarbara.imgAlt} />
            </div>
          </div>
        </div>
      </section>
  
      <section className="c-contact">
        <div className="c-container">
          <h2>{contact.title}</h2>
  
          <div className="c-whatsapp">
            <p>{contact.body}</p>
  
            <button onClick={() => window.open(`https://wa.me/${contact.whatsappNumber}`, '_blank')}><img src={cContactWhats} alt="Icone do whatsapp" />{contact.buttonLabel}</button>
          </div>
        </div>
      </section>
  
      <section className="c-blog">
        <div className="c-container">
          <h2>Blog</h2>
  
          <div className="c-post-list">
            <div className="c-post">
              <img src="https://placehold.it/300x300" alt=""/>
              <strong>Lorem Ispum</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#a">Continue lendo</a>
            </div>
  
            <div className="c-post">
              <img src="https://placehold.it/300x300" alt=""/>
              <strong>Lorem Ispum</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#a">Continue lendo</a>
            </div>
  
            <div className="c-post">
              <img src="https://placehold.it/300x300" alt=""/>
              <strong>Lorem Ispum</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#a">Continue lendo</a>
            </div>
          </div>
  
          <a href="#a">Mais publicações</a>
        </div>
      </section>
  
      <div className="c-footer-thing">
  
      </div>
    </main>
  )
}

IndexPageTemplate.propTypes = {
  whatIsTherapy: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  }),
  typesOfTherapy: PropTypes.shape({
    title1: PropTypes.string,
    body1: PropTypes.string,
    title2: PropTypes.string,
    body2: PropTypes.string,
    title3: PropTypes.string,
    body3: PropTypes.string,
  }),
  forWho: PropTypes.shape({
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
    types: PropTypes.shape({
      individual: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
        url: PropTypes.string
      }),
      couple: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
        url: PropTypes.string
      })
    })
  }),
  aboutBarbara: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
    buttonLabel: PropTypes.string,
    imgAlt: PropTypes.string
  }),
  contact: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    buttonLabel: PropTypes.string,
    whatsappNumber: PropTypes.number
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        whatIsTherapy={frontmatter.whatIsTherapy}
        typesOfTherapy={frontmatter.typesOfTherapy}
        forWho={frontmatter.forWho}
        aboutBarbara={frontmatter.aboutBarbara}
        contact={frontmatter.contact}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        whatIsTherapy {
          title
          body
        }
        typesOfTherapy {
          title1
          body1
          image1 {
            childImageSharp {
              fluid(maxWidth: 405, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image1alt
          body2
          image2 {
            childImageSharp {
              fluid(maxWidth: 405, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2alt
          title3
          body3
          image3 {
            childImageSharp {
              fluid(maxWidth: 405, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image3alt
        }
        forWho {
          title
          buttonLabel
          types {
            individual {
              title
              body
              url
              imgAlt
              image {
                childImageSharp {
                  fluid(maxWidth: 395, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            couple {
              title
              body
              url
              imgAlt
              image {
                childImageSharp {
                  fluid(maxWidth: 395, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        aboutBarbara {
          title
          body
          url
          buttonLabel
          imgAlt
          image {
            childImageSharp {
              fluid(maxWidth: 485, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        contact {
          title
          body
          buttonLabel
          whatsappNumber
        }
      }
    }
  }
`
