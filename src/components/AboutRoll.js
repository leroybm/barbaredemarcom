import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class AboutRoll extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shouldLimit: true
    };
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="c-about-roll" id="about-roll">
        <div className="c-container">
          <h2>Minha História</h2>
  
          <div className={`c-about-roll__list ${this.state.shouldLimit ? 'c-should-limit' : ''}`}>
            {posts &&
              posts.map(({ node: post }) => (
                <article className="c-about-roll__photo"  key={post.id}>
                  <header>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Imagem da foto ${post.frontmatter.title}`, 
                      }} 
                    />{/* TODO: Proper alt */}
                    <strong>{post.frontmatter.title}</strong>
                  </header>
                  <p>{post.excerpt}</p>
                </article>
              ))
            }
                        {posts &&
              posts.map(({ node: post }) => (
                <article className="c-about-roll__photo"  key={post.id}>
                  <header>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Imagem da foto ${post.frontmatter.title}`, 
                      }} 
                    />{/* TODO: Proper alt */}
                    <strong>{post.frontmatter.title}</strong>
                  </header>
                  <p>{post.excerpt}</p>
                </article>
              ))
            }
                        {posts &&
              posts.map(({ node: post }) => (
                <article className="c-about-roll__photo"  key={post.id}>
                  <header>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Imagem da foto ${post.frontmatter.title}`, 
                      }} 
                    />{/* TODO: Proper alt */}
                    <strong>{post.frontmatter.title}</strong>
                  </header>
                  <p>{post.excerpt}</p>
                </article>
              ))
            }
                        {posts &&
              posts.map(({ node: post }) => (
                <article className="c-about-roll__photo"  key={post.id}>
                  <header>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Imagem da foto ${post.frontmatter.title}`, 
                      }} 
                    />{/* TODO: Proper alt */}
                    <strong>{post.frontmatter.title}</strong>
                  </header>
                  <p>{post.excerpt}</p>
                </article>
              ))
            }
                        {posts &&
              posts.map(({ node: post }) => (
                <article className="c-about-roll__photo"  key={post.id}>
                  <header>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Imagem da foto ${post.frontmatter.title}`, 
                      }} 
                    />{/* TODO: Proper alt */}
                    <strong>{post.frontmatter.title}</strong>
                  </header>
                  <p>{post.excerpt}</p>
                </article>
              ))
            }
          </div>
  
          {(this.state.shouldLimit && <button onClick={() => this.setState({ shouldLimit: false })}>Carregar Mais</button>)}
        </div>
      </section>
    )
  }
}

AboutRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AboutRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "about-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AboutRoll data={data} count={count} />}
  />
)
