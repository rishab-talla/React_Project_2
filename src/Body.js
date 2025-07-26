// components/GridContainer.js
import React from 'react';
import GridItem from './GridItem';
import './index.css';
import data from "./data.json";
  
const Body = () => {
  return (
    <div className="grid-container">
      {data.map((card) => {
             return(
              <GridItem
              key = {card.primaryText}
              cardData = {card}/>
             )
      })}
    </div>
  );
};

export default Body;
