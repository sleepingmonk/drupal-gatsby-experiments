import React from 'react';
import queryString from 'query-string';
import Layout from '../../components/layout';
import Picture from '../../components/picture';
import ReadLink from '../../components/read-link';

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
query($id: String!) {
    nodeById(id: $id) {
      ... on NodeArticle {
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
}`;


const ArticleTemplate = () => {

  const id = window.location ? queryString.parse(window.location.search).nid : null;

  const { loading, error, data } = useQuery(APOLLO_QUERY, {
    variables: { id },
  });

  return (
    <Layout>
      {loading && <p>Loading ...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && (
        <div className="article">
          <h1>{data.nodeById.entityLabel}</h1>
          <p>Posted by {data.nodeById.entityOwner.entityLabel}</p>
          <Picture
            image={data.nodeById.fieldImage}
            sizes="90vw"
          />
          <div dangerouslySetInnerHTML={{ __html: data.nodeById.body.processed}}></div>
          <ReadLink to='/'>&larr; Back  to all articles</ReadLink>
        </div>
      )}
    </Layout>
  )
}

export default ArticleTemplate;
