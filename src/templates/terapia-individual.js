import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { get } from 'lodash';
import cContactWhats from "../img/c-contact-whats.svg";

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll';

export const TerapiaIndividualTemplate = ({ data }) => {
  const { title, firstText, image, italicText, secondTitle, secondText, whatsappNumber } = data;

  return (
    <main className="c-internal-therapy-type c-individual-therapy">
      <div className="c-container container">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />

        <p>
          <span dangerouslySetInnerHTML={{ __html: firstText }} />

          <div>
            <img src={get(image, 'childImageSharp.fluid.src', '')} alt={`Imagem para página ${title}`} />

            <i dangerouslySetInnerHTML={{ __html: italicText }} />
          </div>
        </p>

        <h2>
          {secondTitle}
        </h2>

        <p dangerouslySetInnerHTML={{ __html: secondText }}></p>

        <button onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}><img src={cContactWhats} alt="Icone do whatsapp" />Vamos Conversar</button>
      </div>
      <span class="c-internal-therapy-type__background-shadow"></span>
      <BlogRoll internal={true} />
    </main>
  )
}

TerapiaIndividualTemplate.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    firstText: PropTypes.string,
    image: PropTypes.object,
    italicText: PropTypes.string,
    secondTitle: PropTypes.string,
    secondText: PropTypes.string,
    whatsappNumber: PropTypes.string
  })
}

const TerapiaIndividual = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TerapiaIndividualTemplate
        data={frontmatter}
      />
    </Layout>
  )
}

TerapiaIndividual.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TerapiaIndividual

export const pageQuery = graphql`
  query IndividualTherapyTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "terapia-individual" } }) {
      frontmatter {
        title
        firstText
        image {
          childImageSharp {
            fluid(maxWidth: 327, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        italicText
        secondTitle
        secondText
        whatsappNumber
      }
    }
  }
`
