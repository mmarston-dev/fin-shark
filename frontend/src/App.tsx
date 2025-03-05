import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === 'string') {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResults(result.data);
    }
    console.log(searchResults);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) { return; }
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed);
  };

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}></ListPortfolio>
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
