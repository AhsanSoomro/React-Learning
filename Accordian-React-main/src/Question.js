import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const Question = ({title, info}) => {
  const [showInfo,setShowInfo] = useState(false);
  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
      </button>
    </header>
    {showInfo && <p>{info}</p>}
  </article>;
};

export default Question;
