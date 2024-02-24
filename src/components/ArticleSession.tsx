// App.tsx или другой компонент, где вы собираетесь их использовать
import React from 'react';
import ArticleList from './ArticleCardsList';
import { chunkArray } from '../utils/types';
import type { Article } from '../utils/types';

// Предполагаем, что allArticles передаются как пропс или получаются другим способом
interface AppProps {
  allArticles: Article[];
}

const App: React.FC<AppProps> = ({ allArticles }) => {
  const articlesChunks = chunkArray(allArticles, 10);

  return (
    <div className="flex flex-col items-center justify-between w-11/12">
      {articlesChunks.map((chunk, index) => (
        <ArticleList key={index} articles={chunk} />
      ))}
    </div>
  );
};

export default App;
