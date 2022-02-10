import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [ stocks, setStocks ] = useState([]);
  const [ portfolio, setPortfolio ] = useState([]);
  const [ category, setCategory ] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data))
  }, []);

  function buyStock(clickedStock) {
    setPortfolio([...portfolio, clickedStock])
  }

  function sellStock(clickedStock) {
    const filteredPortfolio = portfolio.filter((item) => item.id !== clickedStock.id);
    setPortfolio(filteredPortfolio);
  }

  function handleFilterChange(selectedCategory) {
    setCategory(selectedCategory);
  }

  return (
    <div>
      <SearchBar handleFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock} categoryFilter={category} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
