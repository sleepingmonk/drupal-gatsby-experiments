import { graphql, useStaticQuery } from 'gatsby';

const useArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      drupal {
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
            ... on Drupal_NodeArticle {
              entityId
              entityUrl {
                path
              }
              entityLabel
              entityOwner {
                entityLabel
              }
              body {
                summaryProcessed
              }
              fieldImage {
                xxl: derivative (style: XXL) {
                  width
                  url
                }
                xl: derivative (style: XL) {
                  width
                  url
                }
                large: derivative (style: LARGE) {
                  width
                  url
                }
                medium: derivative (style: MEDIUM) {
                  width
                  url
                }
                small: derivative (style: SMALL) {
                  width
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const articles = data.drupal.nodeQuery.entities;

  return articles.map(article => ({
    id: article.entityId,
    title: article.entityLabel,
    author: article.entityOwner.entityLabel,
    slug: article.entityUrl.path,
    image: article.fieldImage,
    summary: article.body.summaryProcessed,
  }));
};

export default useArticles;
