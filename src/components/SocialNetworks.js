import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faWhatsappSquare, faMedium } from '@fortawesome/free-brands-svg-icons'
import { throttle } from 'lodash';

const FOOTER_HEIGHT = 416;

const SocialNetworks = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  scrollHandler() {
    this.setState({
      hidden: (window.pageYOffset + window.innerHeight) >= (window.document.body.offsetHeight - FOOTER_HEIGHT)
    })
  }

  componentDidMount() {
    this.throttledScrollHandle = throttle(this.scrollHandler.bind(this), (1000 / 60)); // The human eye can't see past 30 fps
    window.addEventListener('scroll', this.throttledScrollHandle);
  }

  componentWillUnmount() {
    if (this.throttledScrollHandle) {
      window.removeEventListener('scroll', this.throttledScrollHandle);
    }
  }

  render() {
    return (
      <div className={`c-social-networks ${this.state.hidden ? 'hidden' : ''}`}>
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
