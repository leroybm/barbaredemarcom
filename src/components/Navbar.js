import React from 'react'
import { Link } from 'gatsby'
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
    return (
      <div className="c-header">
        <nav
          className="c-navbar navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="c-logo" title="Logo">
              <img src={logo} alt="Bárbara Demarco" />
            </Link>
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
            <div className="c-navbar-end navbar-end has-text-centered">
              <Link className="c-navbar-item navbar-item" to="/#what-is-therapy">
                O que é
              </Link>
              <Link className="c-navbar-item navbar-item" to="/#for-who">
                Para quem
              </Link>
              <Link className="c-navbar-item navbar-item" to="/#about-barbara">
                Quem faz
              </Link>
              <Link className="c-navbar-item navbar-item" to="/#blog">
                Blog
              </Link>
              <Link className="c-navbar-item navbar-item" to="/#contact">
                Contato
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
