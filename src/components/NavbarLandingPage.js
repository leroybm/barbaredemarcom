import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { windowScrollTo } from 'seamless-scroll-polyfill'

const PHRASE_INTERVAL = 10000;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      activePhrase: 0
    }
  }

  phrases = [
    { id: 0, text: `“Terapia um espaço para produzir entendimento, sobre nós mesmos, sobre nossas vidas e histórias. É caminhar lado a lado com respeito mútuo e encontrar os significados que nos  expressam no mundo”`, author: `Bárbara Demarco` },
    { id: 1, text: `“A Linguagem é construída na própria descrição que se faz do mundo e de si”`, author: `Keneth Gergen` },
    { id: 2, text: `“O realmente difícil e realmente admirável abrir mão de ser perfeito e iniciar o trabalho de se tornar você mesmo”`, author: `Anna Quindlen` }
  ]

  getNextPhrase = () => {
    this.setState({
      activePhrase: this.state.activePhrase === this.phrases.length - 1 ? 0 : this.state.activePhrase + 1
    });
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.getNextPhrase(), PHRASE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  toggleHamburger = () => {
    this.setState({
        active: !this.state.active,
      }, () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  scroollToSection = (event, sectionId) => {
    event.preventDefault();

    const element = document.getElementById(sectionId);

    if (!element && !(element && element.offsetTop)) {
      window.location = event.target.href;
      return;
    };

    // Element that we're trying to scroll to
    console.info('[Navbar.scrollToSection.element]', element);

    windowScrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }

  render() {
    const phrases = this.phrases
      .filter(phrase => phrase.id === this.state.activePhrase)
      .map(phrase =>
        <p key={phrase.id}>
          {phrase.text}<br/>
          <small>{phrase.author}</small>
        </p>
      );

    return (
      <div className="c-header-landing-page">
        <nav
          className="c-navbar navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="c-container container">
            <div className="navbar-brand">
              {/* Hamburger menu */}
              <div
                className={`c-hamburger-menu navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                role="button"
                aria-hidden={true}
                onClick={() => this.toggleHamburger()}
              >
                Menu
              </div>
            </div>
            <div
              id="navMenu"
              className={`c-nav-menu navbar-menu ${this.state.navBarActiveClass}`}
              onClick={() => this.toggleHamburger()}
              aria-hidden={true}
            >
              <div className="c-navbar-start navbar-start has-text-centered">
                <a className="c-navbar-item navbar-item" href="/#what-is-therapy" onClick={(event) => this.scroollToSection(event, 'what-is-therapy')}>
                  O que é
                </a>
                <a className="c-navbar-item navbar-item" href="/#for-who" onClick={(event) => this.scroollToSection(event, 'for-who')}>
                  Para quem
                </a>
                <a className="c-navbar-item navbar-item" href="/#about-barbara" onClick={(event) => this.scroollToSection(event, 'about-barbara')}>
                  Quem faz
                </a>
                <a className="c-navbar-item navbar-item" href="/#blog" onClick={(event) => this.scroollToSection(event, 'blog')}>
                  Blog
                </a>
                <a className="c-navbar-item navbar-item" href="/#contact" onClick={(event) => this.scroollToSection(event, 'contact')}>
                  Contato
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="c-container container">
          <div className="c-header-landing-page__main">
            <Link to="/" className="c-logo" title="Logo">
              <img src={logo} alt="Bárbara Demarco" />
            </Link>

            <h3>Terapeuta</h3>

            <div className="c-phrases">
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={2500}
                transitionLeaveTimeout={2500}>
                {phrases}
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
