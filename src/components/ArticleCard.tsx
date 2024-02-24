import React from 'react';

import type { ArticleCardProps } from '../utils/types';

const ArticleCard: React.FC<ArticleCardProps> = ({ frontmatter, url, cardColor }) => {
  // Объект стилей для карточки статьи
  const cardStyle = {
    backgroundColor: cardColor,
    width: '24vw',
    height: '16vw',
    minWidth: '200px',
    minHeight: '150px',
    overflow: 'hidden',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column' as 'column', // TypeScript требует уточнения для нестандартных значений
    boxShadow: '3px 5px 10px 0 rgba(0, 0, 0, 0.3)',
  };

  return (
    <div className="article-card" style={cardStyle}>
      {/* Заголовок */}
      <div className="px-4 py-4 flex-grow">
        <div className="font-bold text-xl">{frontmatter.title}</div>
        <p className="text-gray-700 text-base">{frontmatter.excerpt}</p>
      </div>

      {/* Кнопка */}
      <div className="px-4 py-4 self-end">
        <a
          href={`/article/${url}`}
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          Читать далее
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
