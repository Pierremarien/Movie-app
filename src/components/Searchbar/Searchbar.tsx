import React, { useState } from "react";
import styles from "./Searchbar.module.scss";
import Image from "next/image";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form className={styles.searchbar} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">
        <Image src={`/search.svg`} alt="Search Icon" width="20" height="20" />
      </button>
    </form>
  );
};
