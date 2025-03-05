import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

const CardList = ({searchResults, onPortfolioCreate}: Props) => {
    return <>
        {searchResults.length > 0 ? (
            searchResults.map((result) => {
                return ( 
                    <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}></Card>
                );
            }) 
        ) : (
            <h1>No Results</h1>
        )}    
    </>
}

export default CardList;