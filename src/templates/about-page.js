import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AboutRoll from '../components/AboutRoll'
import cInternalAboutPage from '../img/c-internal-about-page.jpg';
import { get } from 'lodash';

export const AboutPageTemplate = ({ noQueAcredito1, noQueAcredito2, noQueAcredito3, experiencia, noQueAcreditoImg }) => {
  const imgSrc = get(noQueAcreditoImg, 'childImageSharp.fluid.src', '')

  return (
    <main>
      <section className="c-internal-about">
        <div className="c-container container">
          <h1>No que acredito</h1>

          <div className="c-mobile-only">
            <span>{noQueAcredito1}</span>

            <img src={cInternalAboutPage} alt={`Barbara Demarco`} />

            <i>{noQueAcredito2}</i>

            <br /><br />

            <span>{noQueAcredito3}</span>
          </div>

          <div className="c-desktop-only">
            <p>
              <span>{noQueAcredito1}</span>

              <i>{noQueAcredito2}</i>

              <span>{noQueAcredito3}</span>

              <strong>Seja bem vindo!</strong>
            </p>

            <img src={imgSrc} alt={`Barbara Demarco`} />
          </div>

          <div className="c-mobile-only">
            <h3>
              Experiencia
            </h3>

            <p dangerouslySetInnerHTML={{ __html: experiencia }}>
            </p>
          </div>
        </div>
        <span className="c-internal-about__background-shadow"></span>
      </section>
      <AboutRoll />
    </main>
  )
}

AboutPageTemplate.propTypes = {
  noQueAcredito1: PropTypes.string,
  noQueAcredito2: PropTypes.string,
  noQueAcredito3: PropTypes.string,
  experiencia: PropTypes.string,
  noQueAcreditoImg: PropTypes.object,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        noQueAcredito1={post.frontmatter.noQueAcredito1}
        noQueAcredito2={post.frontmatter.noQueAcredito2}
        noQueAcredito3={post.frontmatter.noQueAcredito3}
        experiencia={post.frontmatter.experiencia}
        noQueAcreditoImg={post.frontmatter.noQueAcreditoImg}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        noQueAcredito1
        noQueAcredito2
        noQueAcredito3
        experiencia
        noQueAcreditoImg {
          childImageSharp {
            fluid(maxWidth: 500, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
