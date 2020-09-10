import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';

export const query = graphql`
query($id: String!) {
  drupal {
    nodeById(id: $id) {
      ... on Drupal_NodeArticle {
        title: entityLabel
        author: entityOwner {
          authorName: entityLabel
        }
        body {
          processed
        }
        fieldImage {
          alt
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
        <h1>{article.title}</h1>
        <p className="author">Posted by {article.author.authorName}</p>
        <Image
          image={article.fieldImage}
          sizes="90vw"
        />
        <div dangerouslySetInnerHTML={{ __html: article.body.processed}}></div>
        <Link to='/'>&larr; Back  to all articles</Link>
      </div>
    </Layout>
  );
};

export default ArticleTemplate;
