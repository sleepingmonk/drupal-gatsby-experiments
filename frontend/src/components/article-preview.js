import React from 'react';
import { Link } from 'gatsby';
import Picture from '../components/picture';
import ReadLink from '../components/read-link';

const ArticlePreview = ({ article }) => {

  const summary = article.summary.split(' ').splice(0, 50).join(' ') + '...';

  return (
    <article className="article-preview">
      <Picture
        image={article.image}
        sizes="15vw"
        className="article-preview__image"
      />
      <div>
        <h3><Link to={article.slug}>{article.title}</Link></h3>
        <div dangerouslySetInnerHTML={{ __html: summary}}></div>
        <ReadLink to={article.slug}>read this article &rarr;</ReadLink>
      </div>
    </article>
  )
};

export default ArticlePreview;
