import React from 'react'

interface Props {
  onPortfolioDelete: (e: React.SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} readOnly value={portfolioValue} />
        <button>X</button>
      </form>
    </div>
  )
}

export default DeletePortfolio;