import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/NavbarLandingPage'
import '../sass/all.sass'
import '../sass/custom.sass'
import useSiteMetadata from './SiteMetadata'
import SocialNetworks from './SocialNetworks';
import Footer from './Footer'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="pt-br" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#2888AD" />

        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Quicksand:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <SocialNetworks />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
