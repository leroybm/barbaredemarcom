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
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  whatIsTherapy
}) => (
  <div>
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
              <h3>PARA ENCONTRAR A SI MESMO</h3>

              <p>
                Compreender nossos comportamentos e sentimentos, muda a forma como vivemos a vida. Passamos muito tempo da vida tentando fugir da vulnerabilidade, e a grande maioria não é criada para enfrentar o desconforto e desenvolver habilidades de práticas afetivas e gentis com o outro, e principalmente com nós mesmos.<br/><br/>
                Encontrar a si mesmo é um processo que te ajuda a descobrir seus pontos fracos e fortes, suas criatividades, possibilidades e com maior confiança alcançar o equilíbrio na vida pessoal e profissional.<br/><br/>
                A terapia traz a compreensão de quem se é, e como viver no mundo quebrando ciclos e gerando liberdade.<br/><br/>
                “A vida fica mais leve quando a gente vive pra gente”
              </p>
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
        <h2>Para quem</h2>

        <div className="c-for-who__types">
          <div className="c-for-who__type">
            <img src={cHands1} alt=""/>

            <h3>Terapia Individual</h3>

            <p>São tantos os desafios da vida moderna, são tantas as ocupações e necessidades, nos perdemos no tempo, e na agitação do dia a dia. Todas as obrigações cotidianas e a vida que invade  nos fazem esquecer o essencial: Olhar para nós mesmos!</p>

            <button>Como funciona</button>
          </div>

          <div className="c-for-who__type">
            <img src={cHands2} alt=""/>

            <h3>Terapia de Casal</h3>

            <p>Estar em terapia de casal é encontrar um lugar seguro e aberto para os diálogos que movimentam a relação, é estar em um espaço que facilita as conversas mais difíceis, que muitas vezes não se consegue abordar sozinhos na relação, e observar de diferentes ângulos a dinâmica de cada casal.</p>

            <button>Como funciona</button>
          </div>
        </div>
      </div>
    </section>

    <section className="c-about-barbara">
      <div className="c-container">
        <h2>Quem faz</h2>

        <div className="c-columns">
          <div className="c-about">
            <p>Bárbara Demarco, é terapeuta, palestrante, consultora e analista, aventureira no mundo da escrita, onde expressa o seu sentir e criatividade. Através de seu trabalho ela busca ajudar outras pessoas a criar novas possibilidades e resultados, para seus clientes, organizações e para si mesmas.<br/><br/>
              Sua prática terapêutica é norteada pelo Construcionismo Social e pelas práticas pós modernas da Terapia Narrativa e da Terapia Colaborativa e Dialógica. Ela incorpora sua própria crença na aprendizagem como um processo de vida, incentivando e desafiando as pessoas a serem curiosas, criativas e autênticas e protagonistas do seu processo.</p>

            <button>Mais sobre mim</button>
          </div>
          <div className="c-photo">
            <img src={cAboutBarbara} alt=""/>
          </div>
        </div>
      </div>
    </section>

    <section className="c-contact">
      <div className="c-container">
        <h2>Contato</h2>

        <div className="c-whatsapp">
          <p>Marque agora a sua conversa inicial sem compromisso, e aí a terapia começa.</p>

          <button onClick={window.open('https://wa.me/554899532660', '_blank')}><img src={cContactWhats} alt="Icone do whatsapp" /> Vamos conversar</button>
        </div>
      </div>
    </section>

    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  whatIsTherapy: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        whatIsTherapy={frontmatter.whatIsTherapy}
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
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        whatIsTherapy {
          title
          body
        }
      }
    }
  }
`
