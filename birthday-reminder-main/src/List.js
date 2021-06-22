import React from 'react';

const List = ({myPeople}) => {
  return (
    <>
      { myPeople.map( (myPeople) => {
        const {id, name, age, image} = myPeople
        return (
          <article key={id} className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
          </article>
        )
      } ) }
    </>
  );
};

export default List;
