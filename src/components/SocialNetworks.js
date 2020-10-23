import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faWhatsappSquare, faMedium } from '@fortawesome/free-brands-svg-icons'

const SocialNetworks = class extends React.Component {
  render() {
    return (
      <div className="c-social-networks">
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
    )
  }
}

export default SocialNetworks
