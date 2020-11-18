import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AboutRoll from '../components/AboutRoll'
import BlogRoll from '../components/BlogRoll'

export const AboutPageTemplate = () => {
  return (
    <main>
      <section className="c-internal-about">
        <div className="c-container container">
          <h1>No que acredito</h1>

          <p>
            <span>Ao longo da minha experiência e da minha jornada trabalhando através da complexidade humana, tenho tido um interesse constante nas trocas relacionais e nos diálogos que se constroem a partir da interação e entrega no espaço da terapia. O que eu aprendi e aprendo em cada uma destas conversas, norteia  meu “jeito ser” enquanto terapeuta e influencia a “alma“ da minha prática.</span>

            <img src="https://placehold.it/328x492" alt={`Imagem para página ${'var'}`}/>

            <i>Acredito que é possível viver melhor e ter uma vida mais cheia de realizações, em lugares no mundo onde o olhar seja gentil para as singularidades, no potencial transformador e gerador de possibilidades que boas conversas tem. Acredito no respeito mútuo e genuíno,  no interesse sincero pelas histórias que me são contadas, na evolução e aproximação de si mesmo em busca de novos caminhos para vida.</i> 

            <br/><br/>

            <span>Para alcançar a minha proposta de trabalho e de vida, tenho aqui neste espaço, neste site, um lugar de aproximação das minhas maneiras, práticas e valores, com quem me lê, vê ou ouve. Ele une meus interesses, reflexões e apresenta um pouco de mim, oferecendo espaço para troca com vocês. É um espaço de colaboração, pois junta todos os meus movimentos construídos diariamente nas trocas que participo, e busca trazer pra você um lugar para possíveis mergulhos e trocas comigo, com o outro ou com si mesmo. </span>
          </p>

          <h3>
            Experiencia
          </h3>

          <p>
            Bárbara Demarco, é terapeuta, palestrante, consultora e analista, aventureira no mundo da escrita, onde expressa o seu sentir e criatividade. Através de seu trabalho ela busca ajudar outras pessoas a criar novas possibilidades e resultados, para seus clientes, organizações e para si mesmas.<br/><br/>
            Sua prática terapêutica é norteada pelo Construcionismo Social e pelas práticas pós modernas da Terapia Narrativa e da Terapia Colaborativa e Dialógica. Ela incorpora sua própria crença na aprendizagem como um processo de vida, incentivando e desafiando as pessoas a serem curiosas, criativas e autênticas e protagonistas do seu processo.
          </p>
        </div>
      </section>
      <AboutRoll />
      <BlogRoll />
    </main>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  // const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate />
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
      }
    }
  }
`
