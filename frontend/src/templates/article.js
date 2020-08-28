import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Picture from '../components/picture';

export const query = graphql`
query($id: String!) {
  drupal {
    nodeById(id: $id) {
      ... on Drupal_NodeArticle {
        entityLabel
        entityOwner {
          entityLabel
        }
        body {
          processed
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
}`

const ArticleTemplate = ({ data: { drupal: { nodeById: article } }}) => {
  return (
    <Layout>
      <div className="article">
        <h1>{article.entityLabel}</h1>
        <p className="author">Posted by {article.entityOwner.entityLabel}</p>
        <Picture
          image={article.fieldImage}
          sizes="90vw"
        />
        <div dangerouslySetInnerHTML={{ __html: article.body.processed}}></div>
        <ReadLink to='/'>&larr; Back  to all articles</ReadLink>
      </div>
    </Layout>
  );
};

export default ArticleTemplate;
