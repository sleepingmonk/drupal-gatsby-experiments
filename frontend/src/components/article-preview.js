import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';

const ArticlePreview = ({ article }) => {

  const summary = article.summary.split(' ').splice(0, 50).join(' ') + '...';
console.log(article);
  return (
    <article className="article-preview">
      <Image
        image={article.image}
        sizes="15vw"
        className="article-preview__image"
      />
      <div>
        <h3><Link to={article.slug}>{article.title}</Link></h3>
        <div dangerouslySetInnerHTML={{ __html: summary}}></div>
        <Link to={article.slug}>read this article &rarr;</Link>
      </div>
    </article>
  )
};

export default ArticlePreview;
