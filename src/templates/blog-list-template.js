import React from "react"
import { graphql, Link } from "gatsby"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from "../components/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const getMiddle = (arr, c) => {
  if (c < 3) return arr.splice(0, 5);

  if (c > arr.length - 3) return arr.splice(arr.length - 5, 5);

  return arr.splice(c - 2, 5);
};

export default class BlogList extends React.Component {
  render() {
    const { data, internal } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const getTitle = title => title.length > 45 ? `${title.slice(0, 45)}...` : title;

    let { currentPage, numPages } = this.props.pageContext;
    currentPage--;
    numPages--;

    return (
      <Layout>
        <section className={`c-blog ${internal ? 'is-internal' : ''}`} style={{ 'paddingTop': 0 }} id="blog">
          <div className="c-container">

            <div className="c-post-list">
              {posts &&
                posts.map(({ node: post }) => (
                  <article className="c-post" key={post.id} style={{ 'display': 'block' }}>
                    <header>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `Imagem do post ${post.frontmatter.title}`,
                        }}
                      />{/* TODO: Proper alt */}
                      <strong>{getTitle(post.frontmatter.title)}</strong>
                    </header>
                    <p>{post.excerpt}</p>
                    <a href={post.fields.slug}>Continue lendo</a> {/* TODO: Change to Link */}
                  </article>
                ))
              }
            </div>

            {numPages > 0 &&
              <div class="c-paginator">
                {
                  currentPage !== 0 &&
                  <Link to={currentPage - 1 === 0 ? `/blog` : `/blog/${currentPage - 1}`} className="c-paginator__previous">
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Link>
                }

                <div class="c-paginator__page-list">
                  {getMiddle(Array.from({ length: numPages + 1 }, (_, i) => i), currentPage).map(i =>
                    <Link
                      to={i === 0 ? `/blog` : `/blog/${i}`}
                      className={i === currentPage ? 'current' : ''}
                    > {i + 1} </Link>
                  )}
                </div>

                {
                  currentPage !== numPages &&
                  <Link to={`/blog/${currentPage + 1}`} className="c-paginator__next">
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Link>
                }
              </div>
            }
          </div>
        </section>


      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 170)
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
`