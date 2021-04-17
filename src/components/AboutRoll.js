import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { get, orderBy } from 'lodash'

/**
 * Makes a two dimensional array containing groups of 5 posts
 * 
 * @param {object} rawPosts - posts from query
 * @returns 
 */
function createPostGroup(rawPosts, groupSize = 5) {
  return get(
    orderBy((rawPosts || []), 'node.frontmatter.order')
      .reduce((acc, post, i) => {
        acc.currentGroup.push(post);

        if ((i + 1) % groupSize === 0 || (i + 1) === rawPosts.length) {
          acc.result.push(acc.currentGroup);
          acc.currentGroup = [];
        }

        return acc;
      }, {
        currentGroup: [],
        result: []
      }),
    'result',
    []
  );
}

class AboutRoll extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shouldLimit: false
    };
  }

  render() {
    const { data } = this.props
    const { edges: rawPosts } = data.allMarkdownRemark

    const postGroup = createPostGroup(rawPosts);

    console.log('[AboutRoll.postGroup]', postGroup, rawPosts);

    return (
      <section className="c-about-roll" id="about-roll">
        <div className="c-container">
          <h2>Minha História</h2>

          {postGroup && postGroup.map((posts, i) => 
            <div key={i} className={`c-about-roll__list ${i % 2 ? 'mirror' : ''} ${this.state.shouldLimit ? 'c-should-limit' : ''}`}>
              {posts && posts.map(({ node: post }, j) => (
                <div className="c-about-roll__photo" key={post.id} id={`grid${((j)%5)+1}`}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `Imagem da foto ${post.frontmatter.title}`,
                    }}
                  />
                  <div className="c-overlay">
                    <strong>{post.frontmatter.title}</strong>
                    <p>{post.excerpt}</p>
                  </div>
                </div>
              ))
              }
            </div>
          )}

          {/* {(this.state.shouldLimit && <button onClick={() => this.setState({ shouldLimit: false })}>Carregar Mais</button>)} */}
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
                order
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
