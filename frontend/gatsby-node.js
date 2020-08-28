exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      mdx: allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      drupalArticle: drupal {
        nodeQuery(
          sort: {
            field: "changed"
            direction: DESC
          }
          offset: 0
          limit: 100
          filter: {
            conditions: [
              {
                operator: EQUAL,
                field: "type",
                value: ["article"]
              }
            ]
          }
        ) {
          entities {
            entityId
            entityUrl {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors);
  }

  const mdxPosts = result.data.mdx.nodes;

  mdxPosts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug
      },
    });
  });

  const articles = result.data.drupalArticle.nodeQuery.entities;

  articles.forEach(article => {
    actions.createPage({
      path: article.entityUrl.path,
      component: require.resolve('./src/templates/article.js'),
      context: {
        id: article.entityId,
      },
    });
  });
}
