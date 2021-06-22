import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [myPeople, setMyPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{myPeople.length} Birhtdays Today</h3>
        <List myPeople={myPeople} />
        <button onClick={ () => { setMyPeople ( [] ) } } >Clear All</button>
      </section>
    </main>
  )
}

export default App;
