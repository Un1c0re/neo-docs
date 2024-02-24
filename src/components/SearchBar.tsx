// src/components/SearchBar.tsx
import React, { useState } from 'react';
import type {FormEvent, ChangeEvent} from 'react';

// Определение типов для пропсов
interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"             
        value={query}
        onChange={handleChange}
        placeholder="Поиск статей"
      />
      <button type="submit">Поиск</button>
    </form>
  );
}

export default SearchBar;
