import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock, categoryFilter }) {

  const listOfStocks = stocks.filter((stock) => stock.type.includes(categoryFilter)).map(stock => <Stock key={stock.id} stock={stock} handleStock={buyStock} />);

  return (
    <div>
      <h2>Stocks</h2>
      {listOfStocks}
    </div>
  );
}

export default StockContainer;
