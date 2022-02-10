import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, sellStock }) {

  const portfolioList = portfolio.map(portfolioStock => <Stock key={portfolioStock.id} stock={portfolioStock} handleStock={sellStock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
