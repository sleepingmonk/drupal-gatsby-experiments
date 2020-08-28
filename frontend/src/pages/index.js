import React from 'react';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import useArticles from '../hooks/use-articles';

export default () => {
  const articles = useArticles();

  return (
    <Layout>
      <h1>Drupal Articles</h1>
      {articles.map(article => (
        <ArticlePreview key={article.id} article={article} />
      ))}
    </Layout>
  );
};
