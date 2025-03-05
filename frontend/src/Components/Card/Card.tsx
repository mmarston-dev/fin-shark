import React from 'react';
import './Card.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
    id: string | undefined;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: React.SyntheticEvent) => void;
};

const Card = ({id, searchResult, onPortfolioCreate} : Props ) => {
  return (
    <div className='card'>
        <div className='details'>
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
        </div>
        <p className='info'>
            {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>   
  )
};

export default Card;