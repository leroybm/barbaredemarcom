import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import poweredBy from '../img/powered-by.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp, faMediumM } from '@fortawesome/free-brands-svg-icons'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="c-container">
          <div className="c-footer__menu">
            <nav>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/#what-is-therapy">Sobre</Link></li>
                <li><Link to="/#blog">Blog</Link></li>
              </ul>
              <ul>
                <li><Link to="/terapia-individual">TERAPIA INDIVIDUAL</Link></li>
                <li><Link to="/terapia-de-casal">TERAPIA DE CASAL</Link></li>
              </ul>
            </nav>
          </div>

          <div className="c-footer__logo">
            <Link to="/" className="c-logo" title="Logo">
              <img src={logo} alt="Bárbara Demarco" />
            </Link>
          </div>

          <div className="c-footer__info">
            <div className="c-footer__info__social">
              <a href="https://www.instagram.com/terapeuta.barbara.demarco/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="https://wa.me/+554899532660" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a href="https://medium.com/@terapeuta.barbara.demarco" target="_blank" className="c-fix-medium-link" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faMediumM} />
              </a>
            </div>

            <div className="c-footer__info__contact">
              <p><a href="mailto:biademarc@gmail.com">biademarc@gmail.com</a></p>
              <p><a href="tel:+554899532660">(48) 99953-2660</a></p>
            </div>

          </div>
        </div>

        <div className="c-footer__brand">
          <a href="http://pries.com.br/">
            <img src={poweredBy} alt="Feito por Guilherme Pries e Leroy Medeiros" />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
