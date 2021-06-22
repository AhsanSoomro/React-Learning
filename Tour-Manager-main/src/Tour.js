import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTours}) => {
  const [readmore, setReadmore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">Rs.{price}</h4>
        </div>
        <p>{ readmore ? info: `${info.substring(0, 200)}...`}
        <button onClick={ () => setReadmore(!readmore) } >
          { readmore ? "Read More" : "Read Less" }
        </button>
        </p>
        <button className="delete-btn" onClick={() => {
          removeTours(id)
        }}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
