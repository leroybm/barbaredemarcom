import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { InlineWidget } from "react-calendly";

export const BookTemplate = () => {
  return (
    <main>
      <section className="c-internal-about">
        <InlineWidget url='https://calendly.com/leroym/60min' />
      </section>
      <BlogRoll />
    </main>
  )
}

BookTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Book = () => {
  return (
    <Layout>
      <BookTemplate />
    </Layout>
  )
}

Book.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Book

export const bookQuery = graphql`
  query bookQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
