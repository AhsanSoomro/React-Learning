import React, { useState, useEffect } from 'react';
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  const[people, setPeople] = useState(data)
  const[index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length -1
    console.log(lastIndex)
    if(index < 0) {
      setIndex(lastIndex)
      console.log(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  }, [index,people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex) => {
        const {id,image,name,title,quote} = person

        let position = 'nextSlide'

        if(personIndex == index){
          position = 'activeSlide'
        }
        if(personIndex == index -1 || (index === 0 && personIndex === people.length   -1)){
          position = 'lastIndex'
        }

        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FontAwesomeIcon icon={faQuoteRight} className="icon"/>
          </article>
        )
      })}

      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FontAwesomeIcon icon={faChevronRight}/>
      </button>
    </div>
  </section>;
}

export default App;
