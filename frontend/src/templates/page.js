import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Picture from '../components/picture';

export const query = graphql`
  query($id: String!) {
    nodePage(id: { eq: $id }) {
      title
      field_image {
        alt
      }
      relationships {
        uid {
          display_name
        }
        field_image {
          image_style_uri {
            small
            medium
            large
            xl
            xxl
          }
        }
      }
      body {
        processed
      }
    }
  }
`

const PageTemplate = ({ data: {nodePage: node }}) => {

  const image = node.relationships.field_image.image_style_uri

  return (
    <Layout>
      <div className="article">
        <h1>{node.title}</h1>
        <p className="author">Posted by {node.relationships.uid.display_name}</p>
        <Picture
          image={image}
          alt={node.field_image.alt}
          sizes="90vw"
        />
        <div dangerouslySetInnerHTML={{ __html: node.body.processed}}></div>
        <ReadLink to='/'>&larr; Back  to all articles</ReadLink>
      </div>
    </Layout>
  );
};

export default PageTemplate;
