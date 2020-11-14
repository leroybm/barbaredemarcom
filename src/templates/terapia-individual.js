import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import cContactWhats from "../img/c-contact-whats.svg";
import cInternalIndividualTherapy from "../img/c-internal-individual-therapy.jpg";

import Layout from '../components/Layout'

export const TerapiaIndividualTemplate = () => {

  return (
    <main class="c-internal-therapy-type">
      <div className="c-container container">
        <div>
          <h1>
            Terapia <br/>Individual
          </h1>

          <p>
            São tantos os desafios da vida moderna, são tantas as ocupações e necessidades, nos perdemos no tempo, e na agitação do dia a dia. Todas as obrigações cotidianas e a vida que invade  nos fazem esquecer o essencial: Olhar para nós mesmos!<br/><br/>
            Estar em Terapia é abrir um tempo de qualidade nas agendas atribuladas e na  correria da vida atual para acessar  o nosso mundo interno e organizar as partes do quebra cabeça, entender as dores, criar possibilidades,  para explorar e compreender pensamentos e sentimentos.<br/><br/>

            <img src={cInternalIndividualTherapy} alt="Mãos segurando areia, pintura em aquarela"/>

            <i>Acredito que estar em um processo terapêutico deve ser algo tão acessível e normalizado quanto ir a academia, ao dentista e ao médico, devemos ter a oportunidade de nos relacionarmos com nós mesmos e buscar a mudança que  desejamos. O processo de transformação nem sempre é fácil,  pode causar medo, vergonha ou esbarrar no nosso  controle, o que paraliza e nos impede de agir.  A  terapia traz um ambiente seguro, onde através do diálogo se ambrem caminhos e é possivel explorar quem se é e quem se deseja ser.</i> 
          </p>

          <h2>
            Como Funciona?
          </h2>

          <p>
            <strong>Você pode marcar a sua conversa inicial sem compromisso, e aí a terapia começa.</strong><br/><br/>
            Toda semana, teremos um encontro presencial ou online. As sessões de terapia online são oferecidas para todo o Brasil e para Brasileiros que morem fora do país.<br/><br/>
            Cada sessão tem duração de  60 min e nela vamos conversar e construir juntos o seu processo.<br/><br/>
            Para saber mais é só clicar botão abaixo que podemos conversar nos conhecer e  sobre suas  dúvidas.
          </p>

          <button onClick={() => window.open(`https://wa.me/100`, '_blank')}><img src={cContactWhats} alt="Icone do whatsapp" />Vamos Conversar</button>
        </div>
      </div>
    </main>
  )
}

TerapiaIndividualTemplate.propTypes = {

}

const TerapiaIndividual = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TerapiaIndividualTemplate

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
        whatIsTherapy {
            title
            body
        }
      }
    }
  }
`
