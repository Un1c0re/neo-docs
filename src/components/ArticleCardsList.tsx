// ArticleCardList.tsx
import React from 'react';
import { getRandomRgbColor } from '../utils/types';
import type { Article } from '../utils/types';
import ArticleCard from './ArticleCard';

interface ArticleCardListProps {
  articles: Article[];
}

const ArticleCardsList: React.FC<ArticleCardListProps> = ({ articles }) => {
  const articlesColors = articles.map(() => getRandomRgbColor());

  return (
    <div className="flex flex-col items-center justify-between w-11/12">
      <div className="article-card-list w-11/12 h-3/4">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="px-4 py-2" key={index} style={{backgroundColor: articlesColors[index]}}>
              {/* Предполагается, что ArticleCard - это ваш React компонент */}
              <ArticleCard {...article} cardColor={articlesColors[index]} />
              <h2>{article.frontmatter.title}</h2>
              <p>{article.frontmatter.excerpt}</p>
            </div>
          ))
        ) : (
          <p>There are no articles.</p>
        )}
      </div>
    </div>
  );
};

export default ArticleCardsList;
