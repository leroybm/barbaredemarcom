import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="c-blog" id="blog">
        <div className="c-container">
          <h2>Blog</h2>
  
          <div className="c-post-list">
            {posts &&
              posts.map(({ node: post }) => (
                <article className="c-post" key={post.id}>
                  <header>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Imagem do post ${post.frontmatter.title}`, 
                      }} 
                    />{/* TODO: Proper alt */}
                    <strong>{post.frontmatter.title}</strong>
                  </header>
                  <p>{post.excerpt}</p>
                  <a href={post.fields.slug}>Continue lendo</a> {/* TODO: Change to Link */}
                </article>
              ))
            }
          </div>
  
          <a href="#a">Mais publicações</a>
        </div>
      </section>
    )
  }
}

BlogRoll.propTypes = {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
