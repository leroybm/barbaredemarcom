import React from 'react'
import { Link } from 'gatsby'
import logo from "../img/logo.svg";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  phrases = [`“Terapia um espaço para produzir entendimento, sobre nós mesmos, sobre nossas vidas e histórias. É caminhar lado a lado com respeito mútuo e encontrar os significados que nos  expressam no mundo”`, `“A Linguagem é construída na própria descrição que se faz do mundo e de si”`]

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

  render() {
    const phrases = this.phrases
      .filter((phrase, index) => index === this.state.activePhrase)
      .map((phrase, index) =>
        <p key={phrase}>
          {phrase}<br/>
          <small>Keneth Gergen.</small>
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
                <Link className="c-navbar-item navbar-item" to="/about">
                  O que é
                </Link>
                <Link className="c-navbar-item navbar-item" to="/products">
                  Para quem
                </Link>
                <Link className="c-navbar-item navbar-item" to="/blog">
                  Quem faz
                </Link>
                <Link className="c-navbar-item navbar-item" to="/contact">
                  Blog
                </Link>
                <Link className="c-navbar-item navbar-item" to="/contact/examples">
                  Contato
                </Link>
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
                transitionEnterTimeout={5000}
                transitionLeaveTimeout={5000}>
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
