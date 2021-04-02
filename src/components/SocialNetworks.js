import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line
import { faInstagram, faWhatsapp, faMediumM } from '@fortawesome/free-brands-svg-icons'
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
        {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a> */}

        <a href="https://wa.me/+554899532660" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        {/* <a href="https://medium.com" target="_blank" rel="noreferrer" className="c-fix-medium-link">
          <FontAwesomeIcon icon={faMediumM} />
        </a> */}
      </div>
    )
  }
}

export default SocialNetworks
