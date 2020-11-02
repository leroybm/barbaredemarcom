import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import cSlides1 from "../img/c-slides-1.jpg";
import cHands1 from "../img/c-hands-1.jpg";
import cHands2 from "../img/c-hands-2.jpg";
import cAboutBarbara from "../img/c-about-barbara.jpg";
import cContactWhats from "../img/c-contact-whats.svg";
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/LayoutLandingPage'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const IndexPageTemplate = ({
  whatIsTherapy,
  typesOfTherapy,
  forWho,
  aboutBarbara,
  contact,
}) => (
  <main>
    <section className="c-what-is-therapy">
      <div className="c-container">
        <h2>{whatIsTherapy.title}</h2>

        <p>{whatIsTherapy.body}</p>
      </div>
    </section>

    <section className="c-types-of-therapy">
      <div className="c-container">
        <div className="c-slides">
          <div className="c-slide">
            <div className="c-slide-image">
              <img src={cSlides1} alt="" />
            </div>
            <div className="c-slide-body">
              <h3>{typesOfTherapy.title1}</h3>
              <p>{typesOfTherapy.body1}</p>
            </div>
          </div>

          <div className="c-slide" style={{ 'display': 'none' }}>
            <div className="c-slide-image">
              <img src={cSlides1} alt="" />
            </div>
            <div className="c-slide-body">
              <h3>{typesOfTherapy.title2}</h3>
              <p>{typesOfTherapy.body2}</p>
            </div>
          </div>

          <div className="c-slide" style={{ 'display': 'none' }}>
            <div className="c-slide-image">
              <img src={cSlides1} alt="" />
            </div>
            <div className="c-slide-body">
              <h3>{typesOfTherapy.title3}</h3>
              <p>{typesOfTherapy.body3}</p>
            </div>
          </div>
        </div>

        <div className="c-slides-nav">
          <nav>
            <button>
              <FontAwesomeIcon icon={faCircleRegular} />
            </button>
            <button>
              <FontAwesomeIcon icon={faCircleSolid} />
            </button>
            <button>
              <FontAwesomeIcon icon={faCircleRegular} />
            </button>
          </nav>
        </div>
      </div>
    </section>

    <section className="c-for-who">
      <div className="c-container">
        <h2>{forWho.title}</h2>

        <div className="c-for-who__types">
          <div className="c-for-who__type">
            <img src={cHands1} alt=""/>

            <h3>{forWho.types.individual.title}</h3>

            <p>{forWho.types.individual.body}</p>

            <Link to={forWho.types.individual.url}>{forWho.buttonLabel}</Link>
          </div>

          <div className="c-for-who__type">
            <img src={cHands2} alt=""/>

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
            <img src={cAboutBarbara} alt={aboutBarbara.imgAlt} />
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
            <a href="">Continue lendo</a>
          </div>

          <div className="c-post">
            <img src="https://placehold.it/300x300" alt=""/>
            <strong>Lorem Ispum</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="">Continue lendo</a>
          </div>

          <div className="c-post">
            <img src="https://placehold.it/300x300" alt=""/>
            <strong>Lorem Ispum</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="">Continue lendo</a>
          </div>
        </div>

        <a href="">Mais publicações</a>
      </div>
    </section>

    <div className="c-footer-thing">

    </div>
  </main>
)

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
          title2
          body2
          title3
          body3
        }
        forWho {
          title
          buttonLabel
          types {
            individual {
              title
              body
              url
            }
            couple {
              title
              body
              url
            }
          }
        }
        aboutBarbara {
          title
          body
          url
          buttonLabel
          imgAlt
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
