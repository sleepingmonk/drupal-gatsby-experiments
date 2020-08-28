import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../components/read-link';

const PostPreview = ({ post }) => (
  <article className="post-preview">
    <Link to={post.slug} className="post-preview__image">
      <Image
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </Link>
    <div>
      <h3><Link to={post.slug}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview;
