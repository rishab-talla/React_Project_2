// components/GridItem.js
import React from 'react';

const GridItem = (props) => {
  const {cardData} = props;
  const { class1, beforeText, afterText, highlightText, secText, image } = cardData;
  return (
    <div className={`${class1}`}>
      <p className="primary">
        {beforeText}
        {highlightText && <span className="highlight">{highlightText}</span>}
        {afterText && <span className="after-text">{afterText}</span>}
      </p>

      <div className="image-block">
          <img src={process.env.PUBLIC_UR + image} alt="" />
      </div>


      <small className={`${secText}`}>{secText}</small>
    </div>
  );
};

export default GridItem;
