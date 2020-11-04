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
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
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
          <Link to="/" className="c-logo" title="Logo">
            <img src={logo} alt="Bárbara Demarco" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
