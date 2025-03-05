import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    search: string | undefined;
}

const Search = ({onSearchSubmit, handleSearchChange, search}: Props) => {
    return (
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange}></input>
            <button type='submit'>Search</button>
        </form>
    )
}

export default Search;