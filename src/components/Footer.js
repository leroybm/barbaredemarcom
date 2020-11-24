import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import poweredBy from '../img/powered-by.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faWhatsappSquare, faMedium } from '@fortawesome/free-brands-svg-icons'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer__menu"></div>

        <div className="c-footer__logo">
          <Link to="/" className="c-logo" title="Logo">
            <img src={logo} alt="Bárbara Demarco" />
          </Link>
        </div>

        <div className="c-footer__info">
          <div className="c-footer__info__social">
            <Link to="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagramSquare}/>
            </Link>

            <Link to="https://whatsapp.com" target="_blank">
              <FontAwesomeIcon icon={faWhatsappSquare}/>
            </Link>

            <Link to="https://medium.com" target="_blank">
              <FontAwesomeIcon icon={faMedium}/>
            </Link>
          </div>

          <div className="c-footer__info__contact">
            <p><a href="mailto:#">barbara@demarco.com</a></p>
            <p><a href="tel:#">(47) 98765-4321</a></p>
          </div>

        </div>

        <div className="c-footer__brand">
          <a href="#">
            <img src={poweredBy} alt="Feito por Guilherme Pries e Leroy Medeiros"/>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
